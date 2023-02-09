const mongoose = require('mongoose');

const matchForDrawSchema = mongoose.Schema({
    groupNumber: {
        type: Number,
        required: true
    },
    opponentGroupNumber: {
        type: Number,
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
    dateTime: {
        type: Date,
        required: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MatchStatus",
        required: true
    },
    court: {
        type: String,
        required: true
    },
    stadium: {
        type: String,
        required: true
    }
});

exports.MatchForDraw = mongoose.model('MatchForDraw',matchForDrawSchema)