const express = require('express');
const router = express.Router();
constContentRequest = require('../models/ContentRequest');

router.get('/', async (req, res) => {
  const contentRequests = await ContentRequest.find();
  res.json(contentRequests);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const contentRequest = new ContentRequest({ title, description });
  await contentRequest.save();
  res.json({ message: 'Content request added successfully' });
});

module.exports = router;