const mongoose = require('mongoose');


const flowerSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: {
        type: String,
        enum: ['Fresh Flowers', 'Dried Flowers', 'Live Plants', 'Aroma Candles', 'Fresheners']
    },
    image: String
});


const Flower = mongoose.model('Flower', flowerSchema);


module.exports = Flower;
