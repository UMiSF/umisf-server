const mongoose = require('mongoose');

const companyRoundSchema = mongoose.Schema({
    playerOne: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    }],
    playerTwo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    }],
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
        ref: "Umpire",
        required: true
    }
});
exports.CompanyRound = mongoose.model('CompanyRound',companyRoundSchema)