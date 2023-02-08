const mongoose = require('mongoose');

const matchForDrawSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    ageGroupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgeGroup",
        required: true
    },
    drawArray: {
        
    }
});

exports.MatchForDraw = mongoose.model('MatchForDraw',matchForDrawSchema)