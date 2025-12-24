// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

const app = express();

/* ======================
   CORS CONFIGURATION
   ====================== */
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://flower-shop.onrender.com',
  'https://flower-admin.onrender.com',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (mobile apps, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

/* ======================
   SECURITY HEADERS
   (Google OAuth safe)
   ====================== */
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
  next();
});

/* ======================
   MIDDLEWARES
   ====================== */
app.use(express.json());

/* ======================
   STATIC FILES (BACKEND ONLY)
   ====================== */
// for uploaded images
app.use('/images', express.static('uploads'));

/* ======================
   API ROUTES
   ====================== */
app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', checkoutRoutes);

/* ======================
   HEALTH CHECK
   ====================== */
app.get('/api', (req, res) => {
  res.json({ message: 'Flower API is running!' });
});

/* ======================
   DATABASE CONNECTION
   ====================== */
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

/* ======================
   START SERVER
   ====================== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
