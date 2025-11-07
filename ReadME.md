
---

# 🧠 SmartTask Manager

<p align="center">
  <img src="https://raw.githubusercontent.com/mriganka-saikia/Smart-Task-Manager-App/main/frontend/images/banner.jpg" alt="SmartTask Manager Banner" width="90%">
</p>

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" /></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue?style=for-the-badge&logo=html5&logoColor=white" /></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /></a>
  <a href="https://jwt.io/"><img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Frontend%20Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <a href="https://render.com/"><img src="https://img.shields.io/badge/Backend%20Hosted%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" /></a>
</p>

---

## 🧩 Overview

**SmartTask Manager** is a responsive, full-stack web app built using the **MERN stack (MongoDB, Express.js, React/Vanilla JS, Node.js)**.
It allows users to manage tasks efficiently with **JWT-based authentication**, **cloud persistence**, and **offline localStorage fallback**.

> 💡 Designed for productivity. Built for performance.

---

## ✨ Features

* 🔐 Secure Login / Signup with JWT Authentication
* 🧾 CRUD operations on tasks (Add, Edit, Delete, Update Status)
* 💾 LocalStorage fallback for offline usage
* 📱 Fully responsive with TailwindCSS
* ☁️ Deployed with Render (Backend) + Vercel (Frontend)
* 🧠 Clean modular folder structure

---

## 🧰 Tech Stack

| Layer           | Technology                                  | Description                      |
| --------------- | ------------------------------------------- | -------------------------------- |
| Frontend        | HTML5, CSS3, JavaScript (ES6+), TailwindCSS | Responsive and modern UI         |
| Backend         | Node.js, Express.js                         | RESTful API server               |
| Database        | MongoDB Atlas + Mongoose                    | Cloud-based data persistence     |
| Auth            | JSON Web Token (JWT), bcrypt.js             | Secure authentication            |
| Version Control | Git + GitHub                                | Collaboration and source control |
| Deployment      | Vercel (Frontend), Render (Backend)         | Hosting the live app             |

---

## 🏗️ Architecture Diagram

```mermaid
flowchart LR
A[Frontend (HTML/CSS/JS)] -->|Fetch API| B[Express.js Server]
B -->|Mongoose ORM| C[(MongoDB Atlas)]
A -->|LocalStorage (Offline)| A
```

---

## ⚙️ Installation & Setup

### 🔹 Clone the Repository

```bash
git clone https://github.com/mriganka-saikia/Smart-Task-Manager-App.git
cd Smart-Task-Manager-App
```

### 🔹 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_atlas_connection
JWT_SECRET=your_secret_key
PORT=5000
```

Start the server:

```bash
npm run dev
```

### 🔹 Frontend Setup

Open the `frontend/login.html` in your browser directly,
or run locally with:

```bash
cd frontend
npx serve
```

Then visit: **[http://localhost:3000](http://localhost:3000)**

---

## 🔐 API Endpoints

| Method | Endpoint              | Description             | Auth |
| ------ | --------------------- | ----------------------- | ---- |
| POST   | `/api/register`       | Register a new user     | ❌    |
| POST   | `/api/login`          | Login and receive JWT   | ❌    |
| GET    | `/api/getTasks`       | Retrieve all user tasks | ✅    |
| POST   | `/api/addTask`        | Add a new task          | ✅    |
| PUT    | `/api/updateTask/:id` | Update an existing task | ✅    |
| DELETE | `/api/deleteTask/:id` | Delete a task           | ✅    |

---

## 🧠 Offline Mode (LocalStorage Fallback)

* When backend or network is offline, all task operations work locally.
* Tasks are stored under `localStorage.tasksLocal`.
* Works seamlessly between online/offline modes.

---

## 🧪 Testing

Use **Postman** to test:

* `/register`
* `/login`
* `/addTask`
* `/getTasks`
* `/updateTask/:id`
* `/deleteTask/:id`

Include screenshots of successful test responses in your documentation.

---

## ☁️ Deployment

| Layer    | Platform                                             | Description               |
| -------- | ---------------------------------------------------- | ------------------------- |
| Frontend | [Vercel](https://vercel.com)                         | Deploy `/frontend` folder |
| Backend  | [Render](https://render.com)                         | Deploy `/backend` folder  |
| Database | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | Free cloud database       |

After deployment, update:

```js
const BASE_URL = "https://your-backend.onrender.com/api";
```

---

## 👨‍💻 Author

**👤 Mriganka Saikia**
📧 [smriganka00@gmail.com](mailto:smriganka00@gmail.com)
🌐 [GitHub Profile](https://github.com/mriganka-saikia)

---

## 🏁 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Acknowledgments

* [TailwindCSS](https://tailwindcss.com) — for rapid, elegant styling
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — for free cloud hosting
* [Render](https://render.com) — for backend deployment
* [Vercel](https://vercel.com) — for frontend deployment
* [Postman](https://postman.com) — for API testing

---

