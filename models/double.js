const mongoose = require("mongoose");

const doubleSchema = mongoose.Schema({
  ageGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AgeGroup",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['men','women','mix']
  },
  playerOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  playerTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['onsite','bankTransfer']
  },
  paymentConfirmed: {
    type: Boolean
  },
  hasPaymentDone: {
    type: Boolean,
    required: true,
  },
  paymentSlip: {
    type: String,
  },
});

exports.Double = mongoose.model("Double", doubleSchema);
