const mongoose = require("mongoose");

const matchForDrawSchema = mongoose.Schema({
  matchResult: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchResult",
    required: true,
  },
  ageGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AgeGroup",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['men','women','mix']
  },
  groupNumber: {
    type: Number,
    required: true,
  },
  opponentGroupNumber: {
    type: Number,
    required: true,
  },
  nextMatchNumber: {
    type: Number,
    required: true,
  },
  playerOne: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "matchCategory",
    required: true,
  },
  playerTwo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "matchCategory",
    required: true,
  },
  matchCategory: {
    type: String,
    required: true,
    enum: ["Single", "Double", "Team"],
  },
  dateTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['notStarted','ongoing','finished']
  },
  court: {
    type: String,
    required: true,
  },
  stadium: {
    type: String,
    required: true,
  },
});

exports.MatchForDraw = mongoose.model("MatchForDraw", matchForDrawSchema);
