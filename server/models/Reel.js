const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  title: String,
  category: String,
  videoURL: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }
});

module.exports = mongoose.model('Reel', reelSchema);
