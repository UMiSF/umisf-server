const mongoose = require("mongoose");

const subTournementSchema = mongoose.Schema({
  ageGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AgeGroup",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["men", "women","mix"],
  },
  drawArray: [
    {
      draw: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MatchForDraw",
        required: true,
      },
      result: {
        type: Number,
        required: true,
      },
    },
  ],
  doubles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Double",
      required: true,
    },
  ],
  singles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Single",
      required: true,
    },
  ],
  universities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },
  ],
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  ],
  champion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  firstRunnerUp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  secondRunnerUp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
});

exports.SubTournement = mongoose.model("SubTournement", subTournementSchema);
