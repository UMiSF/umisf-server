const mongoose = require('mongoose');

const tournementSchema = mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    captains: [{
        menCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        },
        menViceCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        },
        womenCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        },
        womenViceCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        }
    }],
    pictures: [{
        description: {
            type: String
        },
        picture: {
            type: String,
            required: true
        }
    }],
    flyers: [{
        description: {
            type: String
        },
        flyer: {
            type: String,
            required: true
        }
    }],
    tShirtFront: {
        type: String,
        required: true
    },
    tShirtBack: {
        type: String,
        required: true
    },
    startingDate: {
        type: Date,
        required: true
    },
    description: {
        type: String
    }
});

exports.Tournement = mongoose.model('Tournement',tournementSchema)