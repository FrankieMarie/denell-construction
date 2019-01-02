const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Testimonial = mongoose.model('testimonial', TestimonialSchema);