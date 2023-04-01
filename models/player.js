const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
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
  },
  rank: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
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

playerSchema.index({ contactNumber: 1 });

module.exports = mongoose.model('Player', playerSchema);
