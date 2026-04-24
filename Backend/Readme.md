# ⚙️ Career Connect - Backend

Backend API for Career Connect built using Node.js and Express.

---

## 🌐 Live API

* 🔧 https://career-connect-server-vert.vercel.app

---

## 🚀 Features

* 🔐 Clerk authentication
* 🔑 JWT authorization
* 📦 REST APIs
* ☁️ Resume upload (Cloudinary + Multer)
* 🗄️ MongoDB integration
* 📊 Sentry monitoring

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB

---

## 📦 Key Dependencies

* Mongoose
* JSON Web Token (jsonwebtoken)
* Bcrypt
* Multer
* Cloudinary
* Clerk
* Sentry

---

## 📂 Project Structure

```bash id="backend-structure-final2"
Backend/
│
├── models/
├── routes/
├── controllers/
├── middleware/
└── server.js
```

---

## ⚙️ Setup

```bash id="backend-setup-final2"
npm install
npm run server
```

---

## 🔑 Environment Variables

```env id="backend-env-final2"
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

## 🚀 Deployment

Hosted on **Vercel**

---
