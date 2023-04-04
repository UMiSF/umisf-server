const mongoose = require('mongoose');
const { Schema } = mongoose;

const FeedbackSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sentDate: {
    type: Date,
    required: true,
  },
  hasViewed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
