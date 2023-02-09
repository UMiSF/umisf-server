const mongoose = require('mongoose');

const matchTypeSchema = mongoose.Schema({
    type:  {
        type: String,
        required: true
    }
});

exports.MatchType = mongoose.model('MatchType',matchTypeSchema)