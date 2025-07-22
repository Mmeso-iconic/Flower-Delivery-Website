# 🌸 Flower Delivery Website - Backend API

This is the backend API for a flower delivery website, built with **Node.js**, **Express**, **MongoDB**, and **JWT** authentication.  
It includes secure user signup and login, password hashing with **bcrypt**, and JWT-based token generation.  
Deployed live on Render and tested with Postman.

---

## 📚 Table of Contents
- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Loom Walkthrough](#loom-video)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Setup & Usage](#setup--usage)
- [License](#license)
- [Author](#author)

---

## 📌 Introduction

This backend API powers a responsive flower delivery website.  
It handles user authentication, securely stores user data, and provides endpoints for the frontend.  
Built following modern best practices: component-based structure, environment variables, and clear RESTful routing.

---

## 🔗 Live Demo

**Backend API is live:**  
🌱 [https://flower-delivery-website-backend-afo4.onrender.com](https://flower-delivery-website-backend-afo4.onrender.com)
---

## 🎥 Loom Walkthrough

- [Loom video](https://www.loom.com/share/e1d19bddf3e842119ceed8930fd4eed8?sid=ea8a7d2d-02d8-4d52-a072-03bdf816fc06)

---
## ✨ Features

- Secure user signup with hashed passwords
- User login with JWT authentication
- MongoDB schema supporting Google OAuth (future)
- Separate cart data per user
- Clean MVC folder structure
- Tested and documented with Postman

---

## 🛠 Technologies Used

- **Node.js** & **Express.js** – RESTful API server
- **MongoDB** & **Mongoose** – Database & ORM
- **bcrypt** – Password hashing
- **jsonwebtoken** – JWT token generation
- **dotenv** – Environment variable management
- **Postman** – API testing

---

## 📌 API Endpoints

All endpoints are prefixed with:  
`https://flower-delivery-website-backend-afo4.onrender.com/api/users`

| Method | Endpoint      | Description       |
|-------|---------------|------------------|
| POST  | `/signup`     | Create a new user account |
| POST  | `/login`      | Log in an existing user and get JWT |

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
