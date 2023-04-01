const mongoose = require("mongoose");
const { Schema } = mongoose;

const ageGroupSchema = new Schema({
  groupType: String,
  year: String,
});

module.exports = mongoose.model("AgeGroup", ageGroupSchema);
