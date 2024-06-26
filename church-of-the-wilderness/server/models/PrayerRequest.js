const mongoose = require('mongoose');

const prayerRequestSchema = new mongoose.Schema({
  content: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const PrayerRequest = mongoose.model('PrayerRequest', prayerRequestSchema);

module.exports = PrayerRequest;