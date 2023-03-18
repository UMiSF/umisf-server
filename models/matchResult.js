const mongoose = require('mongoose');
const { Schema } = mongoose;

const matchResultSchema = new Schema({
  teamOneScores: [Number],
  teamTwoScores: [Number],
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'matchType',
    required: true,
  },
  matchType: {
    type: String,
    required: true,
    enum: ['Single', 'Double'],
  },
  umpire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});
module.exports = mongoose.model('MatchResult', matchResultSchema);
