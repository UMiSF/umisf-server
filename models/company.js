const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
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
  hasPaymentDone: {
    type: Boolean,
    required: true,
  },
  paymentSlip: {
    type: String,
  },
  paymentApprover: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
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
companySchema.index( { email: 1 }, { unique: true } )
module.exports = mongoose.model('Company', companySchema);
