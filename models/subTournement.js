const mongoose = require('mongoose');

const subTournementSchema = mongoose.Schema({
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

exports.SubTournement = mongoose.model('SubTournement',subTournementSchema)