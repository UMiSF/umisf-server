const mongoose = require("mongoose");

const subTournementSchema = mongoose.Schema({
  ageGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AgeGroup",
    required: true,
  },
  matchType: {
    type: String,
    enum: ["girls'", "boys'", "mix"],
  },
  drawArrayForSchools: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MatchForDraw",
      required: true,
    },
  ],
  drawArrayForTeams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teamRounds",
      required: true,
    },
  ],
  doubles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Double",
    },
  ],
  singles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Single",
    },
  ],
  universities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
    },
  ],
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  ],
  champion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },
  firstRunnerUp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },
  secondRunnerUp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },
});

exports.SubTournement = mongoose.model("SubTournement", subTournementSchema);
