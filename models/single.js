const mongoose = require("mongoose");

const singleSchema = mongoose.Schema({
  ageGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgeGroup",
        required: true
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
  paymentMethod: {
    type: String,
    required: true,
    enum: ['onsite','bankTransfer']
  },
  hasPaymentDone: {
    type: Boolean,
    required: true,
  },
  paymentConfirmed: {
    type: Boolean
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

exports.Single = mongoose.model("Single", singleSchema);
