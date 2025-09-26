# 📝 Todo API

A simple **RESTful API** for managing tasks (Todos) built with **Node.js**, **Express.js**, and **MongoDB**.  
This project demonstrates fundamental backend concepts such as CRUD operations, validation, and API architecture.

---

## 🚀 Features

- Create, Read, Update, and Delete tasks (CRUD)
- Input validation with **Joi**
- Modular architecture (Models, Controllers, Routes, Middlewares)
- MongoDB integration with **Mongoose**
- Standardized error handling and responses

---

## 📂 Project Structure

│── src/\
│ ├── controllers/ \
│ ├── models/ \
│ ├── routes/ \
│ ├── validations/ \
│ ├── middlewares/ \
│ └── app.js \
│── .gitignore\
│── package.json\
│── README.md

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/alahyarlou/todo-api.git
cd todo-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables
Create a `.env` file in the project root:

```bash
MONGO_URI=mongodb://localhost:27017/todo-api
PORT=5000
```

### 4. Run the server

```bash
npm run dev
```

---

## 🌐 API Endpoints

### 📌 Tasks

- GET `/api/tasks` → Get all tasks

- POST `/api/tasks` → Create a new task

- GET `/api/tasks/:id` → Get a task by ID

- PUT `/api/tasks/:id` → Update a task

- DELETE `/api/tasks/:id` → Delete a task

### 🧪 Testing

You can test the API using Postman or Insomnia.

Example request to create a task:
```http
POST http://localhost:5000/api/tasks
Content-Type: application/json

{
  "title": "Build Todo API",
  "description": "CRUD with Express and MongoDB"
}

```

### 📌 Future Improvements

- Add User Authentication (JWT)

- Unit and integration tests (Jest + Supertest)

- Dockerize the project

- CI/CD pipeline setup

---
### 👨‍💻 Author
- Ali Alahyarlou - <a href="https://github.com/alahyarlou">GitHub</a>