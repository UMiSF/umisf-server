const mongoose = require('mongoose');
const { Schema } = mongoose;

const singleSchema = new Schema({
  ageGroup: {
    type: String,
    required: true,
    enum: ['Under 9', 'Under 11', 'Under 13', 'Under 15', 'Under 17', 'Under 19', 'Company', 'University'],
  },
  matchType: {
    type: String,
    required: true,
    enum: ['Girls', 'Boys', 'Men', 'Women'],
  },
  player: {
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
  year:{
    type:String
  }
});

module.exports = mongoose.model('Single', singleSchema);
