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
    enum: ['Male', 'Female'],
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
    default: 1,
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
  year:{
    type:String
  }
});

module.exports = mongoose.model('University', universitySchema);
