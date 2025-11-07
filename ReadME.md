---

# 🧠 SmartTask Manager

> A responsive, full-stack task management web application built using the MERN stack (MongoDB, Express.js, React/Vanilla JS, Node.js) — with localStorage fallback for offline use.

---

## 📋 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Architecture](#project-architecture)
* [Screenshots](#screenshots)
* [Installation & Setup](#installation--setup)
* [Environment Variables](#environment-variables)
* [API Endpoints](#api-endpoints)
* [LocalStorage Fallback](#localstorage-fallback)
* [Testing](#testing)
* [Deployment](#deployment)
* [Team & Credits](#team--credits)

---

## 🚀 Overview

**SmartTask Manager** is a modern and intuitive task management system that allows users to:

* Register and log in securely using **JWT authentication**.
* Create, update, and delete personal tasks.
* Manage task status (**Pending / Completed**).
* Work **offline** via `localStorage` simulation (no backend required).
* Enjoy a responsive, mobile-first UI built with **TailwindCSS**.

---

## ✨ Features

✅ User registration and login with secure password hashing (bcrypt).
✅ JWT authentication for protected task operations.
✅ Fully responsive UI with TailwindCSS.
✅ CRUD operations on tasks (Create, Read, Update, Delete).
✅ LocalStorage fallback when the backend or internet is unavailable.
✅ Deployment-ready (tested on **Vercel** and **Render**).
✅ Modular folder structure and clean, commented code.

---

## 🧰 Tech Stack

| Layer               | Technology                                  | Purpose                            |
| ------------------- | ------------------------------------------- | ---------------------------------- |
| **Frontend**        | HTML5, CSS3, JavaScript (ES6+), TailwindCSS | Responsive UI and DOM manipulation |
| **Backend**         | Node.js + Express.js                        | RESTful API server                 |
| **Database**        | MongoDB Atlas + Mongoose                    | Data persistence                   |
| **Auth**            | JSON Web Token (JWT)                        | Secure authentication              |
| **Version Control** | Git + GitHub                                | Collaboration and history          |
| **Deployment**      | Render (Backend), Vercel (Frontend)         | Hosting the live app               |

---

## 🏗️ Project Architecture

```mermaid
flowchart LR
A[Frontend (HTML/CSS/JS)] -->|Fetch API / Axios| B[Express.js Backend]
B -->|Mongoose ORM| C[(MongoDB Atlas)]
A -->|LocalStorage (offline)| A
```

---

## 🖼️ Screenshots

| Login Page                            | Dashboard Page                                | Edit Modal                          |
| ------------------------------------- | --------------------------------------------- | ----------------------------------- |
| ![Login](images/screenshot-login.png) | ![Dashboard](images/screenshot-dashboard.png) | ![Edit](images/screenshot-edit.png) |

*(Replace with your actual screenshots)*

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/smarttask-manager.git
cd smarttask-manager
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_atlas_connection
JWT_SECRET=your_secret_key
PORT=5000
```

Start server:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

If using plain HTML:

* Open `/frontend/login.html` in browser
  If you want a local dev server:

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

| Variable     | Description                     | Example                                     |
| ------------ | ------------------------------- | ------------------------------------------- |
| `MONGO_URI`  | MongoDB Atlas connection string | mongodb+srv://user:pass@cluster.mongodb.net |
| `JWT_SECRET` | Secret key for JWT signing      | mysecret123                                 |
| `PORT`       | Backend port                    | 5000                                        |

---

## 📡 API Endpoints

| Method | Endpoint              | Description               | Auth |
| ------ | --------------------- | ------------------------- | ---- |
| POST   | `/api/register`       | Register new user         | ❌    |
| POST   | `/api/login`          | Login user and return JWT | ❌    |
| POST   | `/api/addTask`        | Add a new task            | ✅    |
| GET    | `/api/getTasks`       | Get all tasks             | ✅    |
| PUT    | `/api/updateTask/:id` | Update task details       | ✅    |
| DELETE | `/api/deleteTask/:id` | Delete a task             | ✅    |

✅ = Requires Authorization header:
`Authorization: Bearer <token>`

---

## 🧠 LocalStorage Fallback

When the backend is not connected or offline:

* Tasks are stored in `localStorage` as a JSON array.
* Supports **Add**, **Edit**, **Delete**, and **Mark as Completed** operations.
* Data persists between sessions in the same browser.

You can switch between backend and offline modes seamlessly.

---

## 🧪 Testing

Use **Postman** to test all API routes:

* `/register`
* `/login`
* `/addTask`
* `/getTasks`
* `/updateTask/:id`
* `/deleteTask/:id`

Attach screenshots in your project report as evidence of successful tests.

---

## ☁️ Deployment

| Layer        | Platform                        | Command / Setup                                   |
| ------------ | ------------------------------- | ------------------------------------------------- |
| **Frontend** | Vercel / Netlify / GitHub Pages | Upload `/frontend` folder                         |
| **Backend**  | Render / Railway                | Deploy `/backend` folder and set `.env` variables |

After deployment, update your `BASE_URL` in `frontend/js/auth.js` and `frontend/js/dashboard.js`:

```js
const BASE_URL = "https://your-backend.onrender.com/api";
```

---

## 👨‍💻 Team & Credits

**Project Members / Contributors**

| Name                | Role             | Responsibility                                         |
| ------------------- | ---------------- | ------------------------------------------------------ |
| Your Name           | Developer        | Full-stack development, frontend & backend integration |
| (Optional) Teammate | UI Designer      | Tailwind styling and UX                                |
| (Optional) Teammate | Backend Engineer | API development, JWT, MongoDB                          |

---

## 🏁 License

This project is open-source under the [MIT License](LICENSE).

---

## 💬 Acknowledgments

* [TailwindCSS](https://tailwindcss.com/) for beautiful, responsive UI components
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database hosting
* [Render](https://render.com/) & [Vercel](https://vercel.com/) for seamless free deployment
* [Postman](https://postman.com) for API testing

---