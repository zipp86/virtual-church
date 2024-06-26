const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

router.get('/', async (req, res) => {
  const music = await Music.find();
  res.json(music);
});

router.post('/', async (req, res) => {
  const { title, artist, url } = req.body;
  const music = new Music({ title, artist, url });
  await music.save();
  res.json({ message: 'Music added successfully' });
});

module.exports = router;