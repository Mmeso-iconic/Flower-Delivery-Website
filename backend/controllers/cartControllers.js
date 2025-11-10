const express = require('express');
const { protect } = require('../middlewares/protect');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');

const router = express.Router();

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.delete('/:flowerId', protect, removeFromCart);

module.exports = router;
