const Cart = require('../models/cartModel');

// Merge guest cart into user's cart after login
exports.mergeCart = async (req, res) => {
  const guestItems = req.body.items; // [{ flowerId, quantity }]
  
  console.log('Merge cart request received:', { guestItems });
  
  if (!Array.isArray(guestItems)) {
    return res.status(400).json({ message: "Invalid cart format" });
  }

  if (guestItems.length === 0) {
    return res.json({ message: "No items to merge", cart: null });
  }

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    guestItems.forEach(guestItem => {
      // Validate that flowerId exists
      if (!guestItem.flowerId) {
        console.warn('Guest item missing flowerId:', guestItem);
        return; // Skip this item
      }

      const existingItem = cart.items.find(
        (i) => i.flower.toString() === guestItem.flowerId
      );

      if (existingItem) {
        existingItem.quantity += guestItem.quantity || 1;
      } else {
        cart.items.push({
          flower: guestItem.flowerId,
          quantity: guestItem.quantity || 1
        });
      }
    });

    await cart.save();
    console.log('Cart merged successfully:', cart);

    res.json({
      message: "Cart merged successfully",
      cart
    });

  } catch (err) {
    console.error('Cart merge error:', err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
