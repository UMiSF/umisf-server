const mongoose = require('mongoose');

const ageGroupSchema = mongoose.Schema({
    groupId: {
        type: Number,
        required: true
    },
    groupType: {
        type: String,
        required: true
    }
});

exports.AgeGroup = mongoose.model('AgeGroup',ageGroupSchema)