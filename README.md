# GraphQL API

A clean and modular GraphQL API built with Node.js and Apollo server. 

---

## 🚀 Features

* GraphQL server with a well-structured schema
* Modular resolvers and type definitions
* Environment-based configuration
* JWT authentication (optional section)

---

## 📦 Installation

```bash
npm install
```

Create a `.env` file:

```env
SERVER_PORT = 4000
DB_CONNECTION = mongodb://localhost:27017/todo-graph
SECRET_KEY = fuckSociety
```

---

## ▶️ Run the Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:4000
```

---

## 📁 Folder Structure

```txt
src/
  config/
  models/
    todoModel.js
    userModel.js
  resolvers/
    todoResolver/
      Mutation.js
      Query.js
    userResolver/
       Mutation.js
       Query.js
  utils/
    auth.js
    dbConnection.js
  shema.js
  server.js
```

---

## 📜 Example Query

```graphql
query GetUsers {
  users {
    id
    name
    email
  }
}
```

## ✏️ Example Mutation

```graphql
mutation RegisterUser {
  register(name: "Omar", email: "omar@example.com", password: "123456") {
    id
    name
    email
  }
}
```

---

## 🔐 Authentication (Optional)

Add your JWT token in GraphQL Playground headers:

```json
{
  "Authorization": "YOUR_TOKEN"
}
```

---

## ✅ Scripts

```json
{
  "dev": "nodemon src/index.js",
  "start": "node src/index.js"
}
```
---
< By Omar Abdelmoaty />

