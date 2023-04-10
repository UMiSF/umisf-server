const mongoose = require('mongoose');
const { Schema } = mongoose;

const matchForDrawSchema = new Schema({
  isTeam: {
    type: Boolean,
    default: false,
  },
  matchResult: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MatchResult',
  },
  ageGroup: {
    type: String,
    required: true,
    enum: [
      'Under 9',
      'Under 11',
      'Under 13',
      'Under 15',
      'Under 17',
      'Under 19',
      'Company',
      'University',
    ],
  },
  matchRound: {
    type: String,
    required: true,
    enum: [
      'First Round',
      'Second Round',
      'Third Round',
      'Fourth Round',
      'Pre-quater Final',
      'Quater Final',
      'Semi Final',
      'Final',
    ],
  },
  matchType: {
    type: String,
    required: true,
    enum: ['Boys', 'Girls'],
  },
  groupNumber: {
    type: Number,
  },
  opponentGroupNumber: {
    type: Number,
  },
  nextMatchNumber: {
    type: Number,
  },
  matchNumber: {
    type: Number,
  },
  playerOne: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'matchCategory',
  },
  playerTwo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'matchCategory',
  },
  matchCategory: {
    type: String,
    required: true,
    enum: ['Single', 'Double'],
  },
  scheduledDate: {
    type: String,
  },
  scheduledTime: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not started', 'Sheduled', 'Ongoing', 'Finished'],
  },
  court: {
    type: String,
  },
  stadium: {
    type: String,
  },
  year:{
    type:String
  }
});

module.exports = mongoose.model('MatchForDraw', matchForDrawSchema);
