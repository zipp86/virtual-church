const mongoose = require('mongoose');

const contentRequestSchema = new mongoose.Schema({
  title: String,
  description: String
});

const ContentRequest = mongoose.model('ContentRequest', contentRequestSchema);

module.exports = ContentRequest;