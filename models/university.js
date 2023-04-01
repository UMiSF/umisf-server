const mongoose = require('mongoose');
const { Schema } = mongoose;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: String,
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
    type: String,
    enum:['Confirmed','Not Confirmed', 'Declined']
  },
  paymentSlip: {
    type: String,
  },
  gender: {
    type: String,
  },
});

module.exports = mongoose.model('University', universitySchema);
