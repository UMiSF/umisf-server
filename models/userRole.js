const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    roleType: {
        type: String,
        required: true
    }
});

exports.Player = mongoose.model('Player',playerSchema)