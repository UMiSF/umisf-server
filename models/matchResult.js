const mongoose = require("mongoose");

const matchResultSchema = new mongoose.Schema({
  teamOneScores: [Number],
  teamTwoScores: [Number],
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matchType",
    required: true,
  },
  matchType: {
    type: String,
    required: true,
    enum: ["Single", "Double"],
  },
  umpire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
exports.MatchResultDefault = mongoose.model("MatchResult", matchResultSchema);
