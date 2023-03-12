const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  institute: {
    type: String,
    required: true,
  },
  pastPerformanceSingle: [
    {
      description: {
        type: String,
      },
      proof: {
        type: String,
      },
    },
  ],
  pastPerformanceDouble: [
    {
      description: {
        type: String,
      },
      proof: {
        type: String,
      },
    },
  ],
  performanceThreshold: {
    type: Number,
    required: true,
  },
  rank: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
});

exports.Player = mongoose.model("Player", playerSchema);
