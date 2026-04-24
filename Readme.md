# 🚀 Career Connect - Job & Internship Portal

Career Connect is a web application designed to help users find genuine job and internship opportunities with advanced filtering, secure authentication, and a modern user interface.

---

## 🌐 Live Demo

* 🚀 **Frontend**: https://career-connect-client-rho.vercel.app
* 🔧 **Backend API**: https://career-connect-server-vert.vercel.app

---

## ✨ Features

* 🔐 Authentication using Clerk
* 🔍 Job search with filters
* 📝 Rich job description editor (Quill)
* 📅 Date formatting using Day.js
* ☁️ Resume upload via Cloudinary
* 🔔 Toast notifications
* 📊 Error monitoring using Sentry

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB

### Integrations

* Clerk Authentication
* Cloudinary
* Sentry

---

## 📦 Key Dependencies

* Axios
* React Router DOM
* Clerk
* Mongoose
* Multer
* Cloudinary
* Quill
* Day.js
* React Toastify

---

## 📂 Project Structure

```bash id="root-structure-final2"
CareerConnect/
│
├── Frontend/
├── Backend/
├── .gitignore
└── README.md
```

---

## ⚙️ Environment Variables

### Frontend

```env id="root-env-frontend3"
VITE_BACKEND_URL=your_backend_url
VITE_CLERK_PUBLISHABLE_KEY=your_key
```

### Backend

```env id="root-env-backend3"
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLERK_SECRET_KEY=your_secret
CLERK_WEBHOOK_SECRET=your_webhook_secret
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
SENTRY_DSN=your_dsn
```

---


---


## 🚀 Setup Instructions

### 1. Clone the repository

```bash id="root-clone2"
git clone https://github.com/Prakhar422/CareerConnect.git
cd CareerConnect
```

---

### 2. Run Frontend

```bash id="root-frontend-run2"
cd Frontend
npm install
npm run dev
```

---

### 3. Run Backend

```bash id="root-backend-run2"
cd Backend
npm install
npm run server
```

---

## 🔮 Future Scope

* 🔔 Real-time notifications for job updates and applications
* 🛠️ Admin dashboard for managing users and job postings
* 🤖 AI chatbot for job summaries and user guidance
* 📄 Resume analysis system with job matching and suggestions

---

## ⚠️ Important Notes

* Never expose `.env` files in GitHub
* Always add environment variables in Vercel dashboard
* Restart server after updating environment variables

---

## 👨‍💻 Author

**Prakhar Garg**

---

## 📌 Conclusion

Career Connect aims to provide a reliable and efficient platform for job seekers by eliminating fake opportunities and enhancing the hiring experience using modern technologies.

---
