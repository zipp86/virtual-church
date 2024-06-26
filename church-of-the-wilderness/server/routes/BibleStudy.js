const express = require('express');
const router = express.Router();
const BibleStudy = require('../models/BibleStudy');

router.get('/', async (req, res) => {
  const bibleStudies = await BibleStudy.find();
  res.json(bibleStudies);
});

router.post('/', async (req, res) => {
  const { title, videoUrl } = req.body;
  const bibleStudy = new BibleStudy({ title, videoUrl });
  await bibleStudy.save();
  res.json({ message: 'Bible study added successfully' });
});

module.exports = router;