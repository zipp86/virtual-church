const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  url: String
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;