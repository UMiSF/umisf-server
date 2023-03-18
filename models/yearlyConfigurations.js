const mongoose = require('mongoose');
const { Schema } = mongoose;

const yearlyConfigurationsSchema = new Schema({
  captains: [
    {
      menCaptain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
        required: true,
      },
      menViceCaptain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
        required: true,
      },
      womenCaptain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
        required: true,
      },
      womenViceCaptain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
        required: true,
      },
    },
  ],
  groupphoto: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  'YearlyConfigurations',
  yearlyConfigurationsSchema
);
