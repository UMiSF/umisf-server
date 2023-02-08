const mongoose = require('mongoose');

const singleSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    ageGroupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgeGroup",
        required: true
    },
    playerId: {
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

exports.Single = mongoose.model('Single',singleSchema)