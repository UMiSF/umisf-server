const mongoose = require("mongoose");

const ageGroupSchema = new mongoose.Schema({
  groupType: String
});

exports.AgeGroup = mongoose.model("AgeGroup", ageGroupSchema);
