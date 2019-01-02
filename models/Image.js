const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  path: {
    type: String,
    required: true
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'project',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Image = mongoose.model('image', ImageSchema);