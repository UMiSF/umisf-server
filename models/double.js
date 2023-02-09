const mongoose = require('mongoose');

const doubleSchema = mongoose.Schema({
    ageGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgeGroup",
        required: true
    },
    playerOne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
    playerTwo: {
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

exports.Double = mongoose.model('Double',doubleSchema)