const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post('/', async (req, res) => {
  const { title, description, date } = req.body;
  const event = new Event({ title, description, date });
  await event.save();
  res.json({ message: 'Event created successfully' });
});

module.exports = router;