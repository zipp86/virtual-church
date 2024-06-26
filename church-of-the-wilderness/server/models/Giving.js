const mongoose = require('mongoose');

const givingSchema = new mongoose.Schema({
  amount: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Giving = mongoose.model('Giving', givingSchema);

module.exports = Giving;