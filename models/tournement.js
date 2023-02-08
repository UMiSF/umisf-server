const mongoose = require('mongoose');

const tournementSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    captains: [{
        menCaptainId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        },
        menViceCaptainId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        },
        womenCaptainId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        },
        womenViceCaptainId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true
        }
    }],
    pictures: [{
        pictureId: {
            type: Number,
            required: true
        },
        description: {
            type: String
        },
        picture: {
            type: String,
            required: true
        }
    }],
    flyers: [{
        flyerId: {
            type: Number,
            required: true
        },
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