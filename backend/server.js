const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 
const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');




const app = express();


app.use(cors());        
app.use(express.json()); 
app.use('/images', express.static(path.join(__dirname, 'uploads'))); 
app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);

// Serve React static files
app.use(express.static(path.join(__dirname, "public")));

// Catch-all for React Router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});




mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.send('Flower API is running!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
