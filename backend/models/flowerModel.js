const mongoose = require('mongoose');


const flowerSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: { type: String, required: true },
    image: String
});


const Flower = mongoose.model('Flower', flowerSchema);


module.exports = Flower;
