# Lista de Tarefas 📝

Este é um projeto de lista de tarefas (To-do list) desenvolvido com **Next.js**, **TypeScript**, **Prisma** e **MySQL**. A aplicação permite criar, atualizar, deletar e marcar tarefas como concluídas.

## ✨ Funcionalidades

- Adicionar tarefas
- Marcar tarefas como concluídas ou pendentes
- Editar o título de uma tarefa
- Deletar tarefas
- Integração com banco de dados MySQL via Prisma ORM

## 💻 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Tailwind CSS](https://tailwindcss.com/) *(caso esteja usando para o estilo)*

## 🚀 Como rodar localmente

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Acesse a pasta do projeto**  
   ```bash
   cd project-folder
   ```

3. **Instale as dependências**  
   ```bash
   npm install
   ```

4. **Configure o banco de dados**
   - Crie um arquivo `.env` e adicione a string de conexão com seu MySQL:  
     ```env
     DATABASE_URL="mysql://user:password@localhost:3306/database_name"
     ```
   - Rode as migrações do Prisma:  
     ```bash
     npx prisma migrate dev --name init
     ```

5. **Inicie o servidor de desenvolvimento**  
   ```bash
   npm run dev
   ```


# Task List 📝

This is a **To-do list** project built with **Next.js**, **TypeScript**, **Prisma**, and **MySQL**. The app allows you to create, update, delete, and mark tasks as completed.

## ✨ Features

- Add tasks
- Mark tasks as completed or pending
- Edit task titles
- Delete tasks
- Connects to a MySQL database using Prisma ORM

## 💻 Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Tailwind CSS](https://tailwindcss.com/) *(if you’re using it for styling)*

## 🚀 How to run locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Navigate to the project folder**  
   ```bash
   cd project-folder
   ```

3. **Install the dependencies**  
   ```bash
   npm install
   ```

4. **Set up the database**
   - Create a `.env` file and add your MySQL connection string:  
     ```env
     DATABASE_URL="mysql://user:password@localhost:3306/database_name"
     ```
   - Run the Prisma migrations:  
     ```bash
     npx prisma migrate dev --name init
     ```

5. **Start the development server**  
   ```bash
   npm run dev
   ```
