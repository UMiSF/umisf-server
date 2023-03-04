const mongoose = require("mongoose");

const teamRoundSchema = mongoose.Schema({
  singleOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchResult",
    required: true,
  },
  singleTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchResult",
    required: true,
  },
  singleThree: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchResult",
    required: true,
  },
  doubleOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchResult",
    required: true,
  },
  doubleTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchResult",
    required: true,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "playerTypes",
    required: true,
  },
  playerTypes: {
    type: String,
    required: true,
    enum: ['Player', 'Team']
  },
  umpire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
exports.MatchResultCompany = mongoose.model(
  "TeamRound",
  teamRoundSchema
);
