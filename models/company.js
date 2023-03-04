const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    }],
    paymentMethod: {
        type: String,
        required: true,
        enum: ['onsite','bankTransfer']
      },
    hasPaymentDone: {
        type: Boolean,
        required: true
    },
    paymentSlip: {
        type: String
    },
    type: {
        type: String,
    }
});

exports.Company = mongoose.model('Company',companySchema)