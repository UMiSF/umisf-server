const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
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
    type: Date,
    required: true,
  },
});

exports.Captain = mongoose.model("Captain", captainSchema);
