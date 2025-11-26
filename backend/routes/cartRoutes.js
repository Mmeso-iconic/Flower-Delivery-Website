const express = require('express');
const { protect } = require('../middlewares/protect');
const Cart = require('../models/cartModel');
const { mergeCart } = require('../controllers/cartControllers');

const router = express.Router();

// GET /api/cart - get logged-in user's cart
router.get('/', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.flower');
    if (!cart) return res.json({ items: [] });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST /api/cart/merge - merge guest cart with user cart after login
router.post('/merge', protect, mergeCart);

// DELETE /api/cart - clear user's entire cart
router.delete('/', protect, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    console.log('Cart deleted for user:', req.user._id);
    res.json({ message: 'Cart cleared successfully' });
  } catch (err) {
    console.error('Error clearing cart:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST /api/cart - add flower to user's cart
router.post('/', protect, async (req, res) => {
  const { flowerId, quantity } = req.body;

  console.log('Add to cart request:', { flowerId, quantity, userId: req.user._id });

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
      console.log('Created new cart for user');
    } else {
      console.log('Existing cart:', cart.items);
    }

    const existingItem = cart.items.find(i => i.flower.toString() === flowerId);

    if (existingItem) {
      console.log('Item exists. Old quantity:', existingItem.quantity, 'Adding:', quantity);
      existingItem.quantity += quantity || 1;
      console.log('New quantity:', existingItem.quantity);
    } else {
      console.log('New item. Adding with quantity:', quantity || 1);
      cart.items.push({ flower: flowerId, quantity: quantity || 1 });
    }

    await cart.save();
    console.log('Cart saved:', cart.items);
    res.json({ message: 'Item added to cart', cart });
  } catch (err) {
    console.error('Error in add to cart:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
