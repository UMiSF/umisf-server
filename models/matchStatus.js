const mongoose = require('mongoose');

const matchStatusSchema = mongoose.Schema({
    statusType: {
        type: String,
        required: true
    }
});
exports.MatchStatus = mongoose.model('MatchStatus',matchStatusSchema)