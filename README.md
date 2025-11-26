# 🌸 Flower Delivery Website - Backend API

This is the backend API for a flower delivery website, built with **Node.js**, **Express**, **MongoDB**, and **JWT** authentication.  
It includes secure user signup and login, password hashing with **bcrypt**, JWT-based token generation, and full flower management (add, list, and delete flowers with image upload).  
It also powers the **Admin Panel**, where admins can manage flowers directly from the frontend.  
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
It handles user authentication, securely stores user data, and provides endpoints for managing flowers (create, fetch, and delete).  
An **Admin Panel** is integrated on the frontend to allow admins to directly add or delete flowers.  
Built following modern best practices: MVC folder structure, environment variables, and clear RESTful routing.

---

## 🔗 Live Demo

**Backend API is live:**  
🌱 [https://flower-delivery-website-backend-afo4.onrender.com](https://flower-delivery-website-backend-afo4.onrender.com)

---

## 🎥 Loom Walkthrough

- [Loom video](https://www.loom.com/share/3fd4dcf1f1734d94b7fdc99936121dd8?sid=76310515-3d96-4433-9a14-ff9c1d1307d2)

---

## ✨ Features

- 🔐 Secure user signup with hashed passwords
- 🔑 User login with JWT authentication
- 🛒 Separate cart data per user
- 🌸 Add, fetch, and delete flowers with image upload (via Multer)
- 🗂 Grouped flowers by category for easy frontend rendering
- 🛠 Clean MVC folder structure
- 🖥 **Admin Panel**:
  - Add flowers with name, price, category, description, and image  
  - Delete flowers (via button under description or ❌ on the image)
- 📌 Tested and documented with Postman

---

## 🛠 Technologies Used

- **Node.js** & **Express.js** – RESTful API server
- **MongoDB** & **Mongoose** – Database & ORM
- **bcrypt** – Password hashing
- **jsonwebtoken** – JWT token generation
- **multer** – File upload handling for flower images
- **dotenv** – Environment variable management
- **Postman** – API testing

---

## 📌 API Endpoints

All endpoints are prefixed with:  
`https://flower-delivery-website-backend-afo4.onrender.com/api`

### 👤 User Routes (`/users`)
| Method | Endpoint   | Description       |
|--------|-----------|------------------|
| POST   | `/signup` | Create a new user account |
| POST   | `/login`  | Log in an existing user and get JWT |

Example Request:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}

## 📄 License
This project is for educational use only.  
Feel free to customize and build upon it, but commercial redistribution is not permitted without permission.

## 👩‍💻 Author
Mmesoma Ugwuanyi
