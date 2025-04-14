import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";  // Importando o tipo Prisma para os erros

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      try {
        const tasks = await prisma.task.findMany();
        res.status(200).json(tasks);
      } catch (error) {
        console.error("GET Error:", error);
        res.status(500).json({ error: "Erro ao buscar tarefas" });
      }
      break;

    case "POST":
      try {
        const { title } = req.body;
        if (!title) {
          return res.status(400).json({ error: "O título é obrigatório" });
        }
        const newTask = await prisma.task.create({
          data: {
            title: title.trim(),
            completed: false,
          },
        });
        res.status(201).json(newTask);
      } catch (error) {
        console.error("POST Error:", error);
        res.status(500).json({ error: "Erro ao criar tarefa" });
      }
      break;

    case "PUT":
      try {
        const { id, title, completed } = req.body;
        const updatedTask = await prisma.task.update({
          where: { id: Number(id) },
          data: { title: title?.trim(), completed },
        });
        res.status(200).json(updatedTask);
      } catch (error) {
        console.error("PUT Error:", error);
        const message = error instanceof Error ? error.message : "Erro desconhecido";
        res.status(500).json({ error: `Erro ao atualizar tarefa: ${message}` });
      }
      break;

    case "DELETE":
      try {
        const id = Number(req.query.id);
        await prisma.task.delete({ where: { id } });
        res.status(204).end(); // 204 No Content
      } catch (error) {
        console.error("DELETE Error:", error);
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
          return res.status(404).json({ error: "Tarefa não encontrada" });
        }
        res.status(500).json({ error: "Erro ao deletar tarefa" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

