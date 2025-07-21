const Flower = require('../models/flowerModel')

exports.getFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find();
        const grouped = {};
        flowers.forEach(flower => {
            if (!grouped[flower.category]) {
                grouped[flower.category] = [];
            }
            grouped[flower.category].push(flower);
        });

        res.json(grouped);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Could not fetch flowers' });
    }
};


exports.createFlower =async (req, res) => {
    try {
        const { name, description, price, category} =req.body;
        const image = req.file ? req.file.filename : null;
        const newFlower = new Flower ({name, description, price, category, image});
        await newFlower.save();
        res.json(newFlower);
    } catch (err){
        res.status(500).json({error: 'Could not add flower'});
    }
};


exports.deleteFlower = async (req, res) => {
    try {
        await Flower.findByIdAndDelete(req.params.id); 
        res.json({ message: 'Flower deleted' }); 
    } catch (err) {
        res.status(500).json({ error: 'Could not delete flower' });
    }
};
