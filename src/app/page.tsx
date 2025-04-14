"use client";

import { useState, useEffect } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTaskTitle) {
      alert("Por favor, insira um título para a tarefa.");
      return;
    }

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTaskTitle }),
    });

    const data = await response.json();
    setTasks((prev) => [...prev, data]);
    setNewTaskTitle("");
  };

  const handleToggleTask = async (id: number, completed: boolean, title: string) => {
    await fetch("/api/tasks", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, completed: !completed }),
    });

    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !completed } : task))
    );
  };

  const handleDeleteTask = async (id: number) => {
    await fetch(`/api/tasks?id=${id}`, { method: "DELETE" });
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Tarefas</h1>

      <div className="input-container">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Digite o título da tarefa"
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
      </div>

      <div className="tasks-grid">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <p>{task.title}</p>
            <div className="buttons">
              <button onClick={() => handleToggleTask(task.id, task.completed, task.title)}>
                {task.completed ? "Desfazer" : "Concluir"}
              </button>
              <button onClick={() => handleDeleteTask(task.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          background-color: #fbf9ff;
          color: #000807;
          min-height: 100vh;
          padding: 2rem;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #9395d3;
        }

        .input-container {
          margin-bottom: 2rem;
          display: flex;
          gap: 0.5rem;
        }

        .input-container input {
          padding: 0.5rem;
          border: 2px solid #a2a3bb;
          border-radius: 5px;
          background-color: #fff;
          color: #000;
        }

        .input-container button {
          padding: 0.5rem 1rem;
          background-color: #9395d3;
          border: none;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }

        .tasks-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          width: 100%;
          max-width: 900px;
        }

        .task {
          word-wrap: break-word;
          word-break: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          max-width: 200px;
          padding: 1rem;
          margin: 0.5rem;
          background-color: #FBF9FF;
          border: 2px dashed #A2A3BB;
          border-radius: 10px;
          box-shadow: 1px 1px 3px rgba(0, 8, 7, 0.1);
          text-align: left;
          overflow: hidden;
          );
          width: 200px;
          padding: 1rem;
          border: 2px dashed #a2a3bb;
          border-radius: 10px;
          box-shadow: 2px 2px 10px rgba(0, 8, 7, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .task.completed {
          opacity: 0.6;
          text-decoration: line-through;
        }

        .buttons {
          margin-top: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .buttons button {
          background-color: #000807;
          color: #fbf9ff;
          border: none;
          padding: 0.4rem 0.6rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .buttons button:hover {
          background-color: #9395d3;
        }
      `}</style>
    </div>
  );
}
