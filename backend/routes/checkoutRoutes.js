const express = require('express');
const { createPaymentIntent } = require('../controllers/checkoutController');

const router = express.Router();

// POST /api/create-payment-intent - create payment intent for Stripe
router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;