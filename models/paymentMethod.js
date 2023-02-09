const mongoose = require('mongoose');

const ageGroupSchema = mongoose.Schema({
    methodType: {
        type: String,
        required: true
    }
});

exports.AgeGroup = mongoose.model('AgeGroup',ageGroupSchema)