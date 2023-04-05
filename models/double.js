const mongoose = require('mongoose');
const { Schema } = mongoose;

const doubleSchema = new Schema({
  ageGroup: {
    type: String,
    required: true,
    enum: ['Under 9', 'Under 11', 'Under 13', 'Under 15', 'Under 17', 'Under 19', 'Company', 'University'],
  },
  matchType: {
    type: String,
    required: true,
    enum: ['Girls', 'Boys', 'Men', 'Women', 'Mix'],
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  playerPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['On-site', 'Bank Transfer'],
  },
  paymentConfirmed: {
    type: Boolean,
    default: false,
  },
  paymentSlip: {
    type: String,
  },
  paymentApprover: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Double', doubleSchema);
