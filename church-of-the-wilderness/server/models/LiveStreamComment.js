const mongoose = require('mongoose');

const liveStreamCommentSchema = new mongoose.Schema({
  content: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const LiveStreamComment = mongoose.model('LiveStreamComment', liveStreamCommentSchema);

module.exports = LiveStreamComment;