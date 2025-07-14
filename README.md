# 📝 Task Manager

A full-stack Node.js + Express + MongoDB project with a clean frontend (React) and modular backend. Includes authentication, role-based access, dashboards, task management, and Excel report export.

---

##  Features

* User registration & login (JWT)
* Role-based: `admin` and `member`
* Task management with status, priority, checklist
* Admin & user dashboards
* Excel reports export
* File uploads for attachments (JPEG/PNG)
* Organized code: controllers, routes, models, middlewares
* Frontend (React): components, pages, services

---

## 📁 Project Structure

```
Task manager/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── taskController.js
│   │   ├── reportController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── taskRoutes.js
│   │   ├── reportRoutes.js
│   │   └── userRoutes.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddlewares.js
│   ├── uploads/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── contexts/
│       ├── App.js
│       └── index.js
└── README.md
```

---

## ⚙️ Installation & Setup

Clone repo, install dependencies, create `.env` from `.env.example`, and start server:

```bash
git clone https://github.com/KrishAgarwal-44/Task-Manager.git
cd Task-Manager
npm install
npm start
```

## 🔑 Authentication & Routes

* Backend routes in `backend/routes/`
* Protect private routes using JWT
* `adminOnly` middleware for admin routes

## 📊 Dashboards & Reports

* Admin: `/api/tasks/dashboard-data`
* User: `/api/tasks/user-dashboard-data`
* Export tasks: `/api/reports/export/tasks`
* Export users: `/api/reports/export/users`

## ✅ Task & User Management

* Manage tasks, update status, update checklist
* User list, profile, and detail endpoints

## 📁 Frontend (React)

* Components & pages for login, dashboard, tasks
* Services folder for API calls
* Contexts for global state

## 📄 License

MIT

## 🤝 Contributing

Pull requests welcome. For major changes, open an issue.

## ✨ Author

Krish Agarwal – [GitHub](https://github.com/KrishAgarwal-44)
