import mongoose from "mongoose";
const { Schema } = mongoose;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
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
  hasPaymentDone: {
    type: Boolean,
    required: true,
  },
  paymentSlip: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
});

exports.University = mongoose.model("University", universitySchema);
