const mongoose = require("mongoose");

const singleSchema = mongoose.Schema({
  ageGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgeGroup",
        required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['men','women','mix']
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
});

exports.Single = mongoose.model("Single", singleSchema);
