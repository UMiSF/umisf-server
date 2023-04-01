const mongoose = require("mongoose");
const { Schema } = mongoose;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: String,
  matchType: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
  ],
  paymentMethod: {
    type: String,
    required: true,
    enum: ["On-site", "Bank Transfer"],
  },
  paymentConfirmed: {
    type: String,
    enum: ["Confirmed", "Not Confirmed", "Declined"],
  },
  paymentSlip: {
    type: String,
  },
  gender: {
    type: String,
  },
  paymentApprover: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("University", universitySchema);
