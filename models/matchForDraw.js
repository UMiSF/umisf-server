const mongoose = require("mongoose");

const matchForDrawSchema = mongoose.Schema({
  matchResult: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchResult",
  },
  ageGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AgeGroup",
    required: true,
  },
  matchRound: {
    type: String,
    required: true,
    enum: [
      "firstRound",
      "secondRound",
      "thirdRound",
      "fourthRound",
      "preQuaterFinal",
      "quaterFinal",
      "semiFinal",
      "final",
    ],
  },
  matchType: {
    type: String,
    required: true,
    enum: [
      "boys'Singles",
      "boys'Doubles",
      "girls'Singles",
      "girls'Doubles",
      "university",
      "company",
    ],
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
    refPath: "matchCategory",
  },
  playerTwo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "matchCategory",
  },
  matchCategory: {
    type: String,
    required: true,
    enum: ["Single", "Double"],
  },
  dateTime: {
    type: Date,
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
});

exports.MatchForDraw = mongoose.model("MatchForDraw", matchForDrawSchema);
