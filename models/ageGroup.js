const mongoose = require("mongoose");

const ageGroupSchema = mongoose.Schema({
  groupType: {
    type: String,
    required: true,
  },
});

exports.AgeGroup = mongoose.model("AgeGroup", ageGroupSchema);
