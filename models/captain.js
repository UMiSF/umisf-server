const mongoose = require('mongoose');
const { Schema } = mongoose;

const captainSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
  },
  linkedIn: {
    type: String,
  },
  facebook: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
});

module.exports = mongoose.model('Captain', captainSchema);
