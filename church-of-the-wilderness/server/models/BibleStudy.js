const mongoose = require('mongoose');

const bibleStudySchema = new mongoose.Schema({
  title: String,
  videoUrl: String
});

const BibleStudy = mongoose.model('BibleStudy', bibleStudySchema);

module.exports = BibleStudy;