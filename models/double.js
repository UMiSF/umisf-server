const mongoose = require("mongoose");

const doubleSchema = mongoose.Schema({
  ageGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AgeGroup",
    required: true,
  },
  matchType: {
    type: String,
    required: true,
    enum: ["girls'","boys'",'mix']
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  playerPartner: {
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
  paymentApprover: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

exports.Double = mongoose.model("Double", doubleSchema);
