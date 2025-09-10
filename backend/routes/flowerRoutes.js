const express = require('express');
const router = express.Router();


const { getFlowers, createFlower, deleteFlower } = require('../controllers/flowerControllers');


const upload = require('../middlewares/uploadMiddleware');


router.get('/', getFlowers); 
router.post('/', upload.single('image'), createFlower); 
router.delete('/:id', deleteFlower); 

module.exports = router;
