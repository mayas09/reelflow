const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  label: String,
  description: String,
  link: String
});

module.exports = mongoose.model('Service', serviceSchema);
