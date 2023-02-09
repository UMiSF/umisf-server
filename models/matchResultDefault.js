const mongoose = require('mongoose');

const matchResultDefaultSchema = mongoose.Schema({
    matchDraw: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MatchForDraw",
        required: true
    },
    teamOneScores: [{
        type: Number,
        required: true
    }],
    teamTwoScores: [{
        type: Number,
        required: true
    }],
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
    umpire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});
exports.MatchResultDefault = mongoose.model('MatchResultDefault',matchResultDefaultSchema)