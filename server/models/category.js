const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,   
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});

exports.category = mongoose.model('Category', categorySchema);