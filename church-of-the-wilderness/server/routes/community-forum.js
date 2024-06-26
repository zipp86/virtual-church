const express = require('express');
const router = express.Router();
const CommunityForumPost = require('../models/CommunityForumPost');

router.get('/', async (req, res) => {
  const communityForumPosts = await CommunityForumPost.find().populate('userId');
  res.json(communityForumPosts);
});

router.post('/', async (req, res) => {
  const { content, userId } = req.body;
  const communityForumPost = new CommunityForumPost({ content, userId });
  await communityForumPost.save();
  res.json({ message: 'Community forum post created successfully' });
});

module.exports = router;