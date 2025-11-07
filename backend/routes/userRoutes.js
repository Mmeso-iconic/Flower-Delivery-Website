const { protect } = require('../middlewares/protect');
const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.get('/profile', protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}!`, user: req.user });
});

module.exports = router;
