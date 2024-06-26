const express = require('express');
const router = express.Router();
const Giving = require('../models/Giving');

router.get('/', async (req, res) => {
  const giving = await Giving.find().populate('userId');
  res.json(giving);
});

router.post('/', async (req, res) => {
  const { amount, userId } = req.body;
  const giving = new Giving({ amount, userId });
  await giving.save();
  res.json({ message: 'Giving created successfully' });
});

module.exports = router;