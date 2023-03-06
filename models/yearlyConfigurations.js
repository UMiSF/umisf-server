const mongoose = require('mongoose');

const yearlyConfigurationsSchema = mongoose.Schema({
    captains: [
        {
          menCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true,
          },
          menViceCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true,
          },
          womenCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true,
          },
          womenViceCaptain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Captain",
            required: true,
          },
        },
      ],
      groupphoto: {
        type: String,
        required: true
      }
});

exports.YearlyConfigurations = mongoose.model('YearlyConfigurations',yearlyConfigurationsSchema)