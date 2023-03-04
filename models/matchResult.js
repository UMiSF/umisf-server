const mongoose = require("mongoose");

const matchResultSchema = mongoose.Schema({
  teamOneScores: [
    {
      type: Number,
      required: true,
    },
  ],
  teamTwoScores: [
    {
      type: Number,
      required: true,
    },
  ],
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  umpire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
exports.MatchResultDefault = mongoose.model(
  "MatchResult",
  matchResultSchema
);
