
# 🏗️ Skyline Constructions — Business Portfolio Platform

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite\&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb\&logoColor=white)
![MaterialTailwind](https://img.shields.io/badge/Material%20Tailwind-UI-0284C7)

![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

---

## 📌 Overview

**Skyline Constructions** is a full-stack business portfolio platform built for construction and architecture firms.
It showcases projects and services through a professional public website while providing a secure **Admin Dashboard** that allows business owners to manage content dynamically — without touching code.

This project demonstrates **real-world full-stack development**, CRUD operations, image uploads, and admin-level access control.

---

## 🚀 Key Features

### 🌐 Public Portal

* 🏗️ **Project Gallery**
  Dynamically displays completed projects with images and descriptions.
* 🛠️ **Service Showcase**
  Highlights core services offered by the company.
* 📩 **Contact & Inquiry Form**
  Saves client messages directly to the database.
* 📱 **Responsive Design**
  Professional UI built using **Material Tailwind**.

---

### 🛡️ Admin Dashboard (`/admin`)

* ✏️ **Project Management**
  Add, update, and delete projects (with image uploads).
* 📊 **Inquiry Tracking**
  View and manage messages from potential clients.
* 🔐 **Secure Access**
  Restricted admin-only routes.

---

## ⚡ Performance & Architecture Highlights

* 📦 Modular React component architecture
* 🚀 Fast frontend builds using **Vite**
* 🖼️ Image uploads handled via **Multer**
* 🔁 RESTful APIs with Express.js
* 🗄️ Scalable MongoDB schema using Mongoose
* 🌐 Clear separation of frontend & backend

---

## 🛠️ Tech Stack

### **Frontend (Client)**

* **Framework:** React (Vite)
* **Styling:** Material Tailwind & CSS
* **Routing:** React Router DOM
* **HTTP Client:** Axios

### **Backend (Server)**

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Mongoose)
* **File Uploads:** Multer
* **API Style:** RESTful Architecture

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16+ recommended)
* MongoDB (local or cloud)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/skyline_constructions.git
cd skyline_constructions
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** to view the application.

---

## 📂 Project Structure

```
client/
 ├── pages/
 │   ├── Home
 │   ├── Projects
 │   └── Admin
 └── components/

server/
 ├── models/
 │   ├── Project.js
 │   └── Contact.js
 ├── routes/
 │   ├── projectRoutes.js
 │   └── contactRoutes.js
 ├── uploads/
 └── index.js
```

---

## 🔗 API Endpoints

| Method | Endpoint            | Description                    |
| ------ | ------------------- | ------------------------------ |
| GET    | `/api/projects`     | Fetch all projects             |
| POST   | `/api/projects`     | Add a new project (with image) |
| DELETE | `/api/projects/:id` | Delete a project               |
| POST   | `/api/contact`      | Submit contact form            |
| GET    | `/api/contact`      | Fetch inquiries (Admin)        |

---

## 🌍 Deployment

* **Frontend:** Vercel / Netlify
* **Backend:** Render / Railway
* **Database:** MongoDB Atlas

Environment variables are securely configured during deployment.

---

## 🧠 Future Enhancements

* 🔐 Admin authentication & role-based access
* 🖼️ Cloud image storage (Cloudinary / S3)
* 📊 Analytics dashboard
* 📝 CMS-style content editor
* 🌍 SEO optimization

---

## 🤝 Contributing

Contributions are welcome!
Fork the repository, create a feature branch, and submit a Pull Request.

---

## 📄 License

This project is open-source and licensed under the **MIT License**.

