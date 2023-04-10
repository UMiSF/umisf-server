const mongoose = require('mongoose');
const { Schema } = mongoose;

const subTournementSchema = new Schema({
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
  matchType: {
    type: String,
    enum: ['Girls', 'Boys', 'Men', 'Women', 'Mix'],
  },
  drawArrayForSchools: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MatchForDraw',
      required: true,
    },
  ],
  drawArrayForTeams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'teamRounds',
      required: true,
    },
  ],
  doubles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Double',
    },
  ],
  singles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Single',
    },
  ],
  universities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'University',
    },
  ],
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
  ],
  champion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
  firstRunnerUp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
  secondRunnerUp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
  year:{
    type:String
  }
});

module.exports = mongoose.model('SubTournement', subTournementSchema);
