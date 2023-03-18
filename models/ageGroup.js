import mongoose from "mongoose";
const { Schema } = mongoose;

const ageGroupSchema = new Schema({
  groupType: String,
});

exports.AgeGroup = mongoose.model("AgeGroup", ageGroupSchema);
