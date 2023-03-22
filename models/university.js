const mongoose = require('mongoose');
const { Schema } = mongoose;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  matchType: {
    type: String,
    required: true,
    enum: ['Men', 'Women'],
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
    type: Boolean,
    default:false
  },
  paymentSlip: {
    type: String,
  },
  paymentApprover: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
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

module.exports = mongoose.model('University', universitySchema);
