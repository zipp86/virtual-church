const express = require('express');
const router = express.Router();
const PrayerRequest = require('../models/PrayerRequest');

router.get('/', async (req, res) => {
  const prayerRequests = await PrayerRequest.find().populate('userId');
  res.json(prayerRequests);
});

router.post('/', async (req, res) => {
  const { content, userId } = req.body;
  const prayerRequest = new PrayerRequest({ content, userId });
  await prayerRequest.save();
  res.json({ message: 'Prayer request created successfully' });
});

module.exports = router;