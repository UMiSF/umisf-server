const mongoose = require('mongoose');

const matchResultUniversitySchema = mongoose.Schema({
    matchDraw: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MatchForDraw",
        required: true
    },
    singleOne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UniversityRound",
        required: true
    },
    singleTwo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UniversityRound",
        required: true
    },
    singleThree: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UniversityRound",
        required: true
    },
    doubleOne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UniversityRound",
        required: true
    },
    doubleTwo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UniversityRound",
        required: true
    },
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
exports.MatchResultUniversity = mongoose.model('MatchResultUniversity',matchResultUniversitySchema)