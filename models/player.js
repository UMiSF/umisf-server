const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    universityId: {
        type: String,
        required: true
    },
    pastPerformance: [{
        description: {
            type: String,
            required: true
        },
        proof: {
            type: String
        }
    }],
    performanceThreshold: {
        type: Number,
        required: true
    },
    rank: {
        type: Number
    },
    gender: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    postalAddress: {
        type: String
    },
    photo: {
        type: String,
        required: true
    }
});

exports.Player = mongoose.model('Player',playerSchema)