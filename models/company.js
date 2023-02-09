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
        type: mongoose.Schema.Types.ObjectId,
        ref: "PaymentMethod",
        required: true
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
        required: true
    }
});

exports.Company = mongoose.model('Company',companySchema)