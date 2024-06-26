const express = require('express');
const router = express.Router();
const LiveStreamComment = require('../models/LiveStreamComment');

router.get('/', async (req, res) => {
  const liveStreamComments = await LiveStreamComment.find().populate('userId');
  res.json(liveStreamComments);
});

router.post('/', async (req, res) => {
  const { content, userId } = req.body;
  const liveStreamComment = new LiveStreamComment({ content, userId });
  await liveStreamComment.save();
  res.json({ message: 'Comment added successfully' });
});

module.exports = router;