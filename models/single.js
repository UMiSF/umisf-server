const mongoose = require('mongoose');

const singleSchema = mongoose.Schema({
    ageGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgeGroup",
        required: true
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
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
    }
});

exports.Single = mongoose.model('Single',singleSchema)