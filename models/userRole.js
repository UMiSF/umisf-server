const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    roleId: {
        type: Number,
        required: true
    },
    roleType: {
        type: String,
        required: true
    }
});

exports.Player = mongoose.model('Player',playerSchema)