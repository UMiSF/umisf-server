const mongoose = require("mongoose");

const teamRoundSchema = mongoose.Schema({
  isTeam: {
    type: Boolean,
    default: true,
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
    enum: ["University", "Company"],
  },
  scheduledDate: {
    type: String,
  },
  scheduledTime: {
    type: String,
  },
  status: {
    type: String,
    enum: ["notStarted", "ongoing", "finished"],
  },
  court: {
    type: String,
  },
  stadium: {
    type: String,
  },
  umpire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
exports.MatchResultCompany = mongoose.model("TeamRound", teamRoundSchema);
