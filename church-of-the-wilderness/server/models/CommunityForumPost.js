const mongoose = require('mongoose');

const communityForumPostSchema = new mongoose.Schema({
  content: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const CommunityForumPost = mongoose.model('CommunityForumPost', communityForumPostSchema);

module.exports = CommunityForumPost;