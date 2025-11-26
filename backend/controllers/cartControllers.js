const Cart = require('../models/cartModel');

// Merge guest cart into user's cart after login
exports.mergeCart = async (req, res) => {
  const guestItems = req.body.items; // [{ flowerId, quantity }]
  if (!Array.isArray(guestItems)) {
    return res.status(400).json({ message: "Invalid cart format" });
  }

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    guestItems.forEach(guestItem => {
      const existingItem = cart.items.find(
        (i) => i.flower.toString() === guestItem.flowerId
      );

      if (existingItem) {
        existingItem.quantity += guestItem.quantity;
      } else {
        cart.items.push({
          flower: guestItem.flowerId,
          quantity: guestItem.quantity
        });
      }
    });

    await cart.save();

    res.json({
      message: "Cart merged successfully",
      cart
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
