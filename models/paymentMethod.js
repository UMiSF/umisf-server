const mongoose = require('mongoose');

const ageGroupSchema = mongoose.Schema({
    methodId: {
        type: Number,
        required: true
    },
    methodType: {
        type: String,
        required: true
    }
});

exports.AgeGroup = mongoose.model('AgeGroup',ageGroupSchema)