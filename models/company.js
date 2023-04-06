const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  matchType: {
    type: String,
    required: true,
    enum: ['A Division', 'B Division'],
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player',
      required: true,
    },
  ],
  paymentMethod: {
    type: String,
    required: true,
    enum: ['On-site', 'Bank Transfer'],
  },
  paymentConfirmed: {
    type: Number,
    default: 0,
    enum: [-1, 0, 1],
  },
  paymentSlip: {
    type: String,
  },
  paymentApprover: {
    type: String,
    default: 'N/A'
  
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
companySchema.index({ email: 1 }, { unique: true });
module.exports = mongoose.model('Company', companySchema);
