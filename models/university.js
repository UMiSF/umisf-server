const mongoose = require('mongoose');

const universitySchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    players: [{
        playerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Player",
            required: true
        }
    }],
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
    },
    type: {
        type: String,
        required: true
    },
});

exports.University = mongoose.model('University',universitySchema)