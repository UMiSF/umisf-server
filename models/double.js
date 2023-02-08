const mongoose = require('mongoose');

const doubleSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    ageGroupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgeGroup",
        required: true
    },
    playerOneId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
    playerTwoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
    paymentMethod: [{
        methodId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PaymentMethod",
            required: true
        }
    }],
    hasPaymentDone: {
        type: Boolean,
        required: true
    },
    paymentSlip: {
        type: String
    }
});

exports.Double = mongoose.model('Double',doubleSchema)