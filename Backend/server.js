const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 
const flowerRoutes = require('./routes/flowerRoutes');


const app = express();


app.use(cors());        
app.use(express.json());   
app.use('/api/flowers', flowerRoutes);



mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.send('Flower API is running!');
});


const PORT = process.env.PORT_NUMBER || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
