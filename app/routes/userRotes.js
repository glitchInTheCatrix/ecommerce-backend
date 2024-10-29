// routes/userRoutes.js

const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/profile', auth, async (req, res) => {
  // Fetch and return user profile data using req.user.userId
});

module.exports = router;
