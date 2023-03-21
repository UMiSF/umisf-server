const playerSchema = require("../models/player");
const singleSchema = require("../models/single");
const ageGroupSchema = require("../models/ageGroup");
const captainSchema = require("../models/captain");
const companySchema = require("../models/company");
const doubleSchema = require("../models/double");
const matchForDrawSchema = require("../models/matchForDraw");
const matchResultSchema = require("../models/matchResult");
const subTournementSchema = require("../models/subTournement");
const teamRoundSchema = require("../models/teamRound");
const tournementSchema = require("../models/tournement");
const universitySchema = require("../models/university");
const userSchema = require("../models/user");
const yearlyConfigurationsSchema = require("../models/yearlyConfigurations");
const mongoose = require("mongoose");

const schemas = {
  player: playerSchema,
  single: singleSchema,
  ageGroup: ageGroupSchema,
  captain: captainSchema,
  company: companySchema,
  double: doubleSchema,
  matchForDraw: matchForDrawSchema,
  matchResult: matchResultSchema,
  subTournement: subTournementSchema,
  teamRound: teamRoundSchema,
  tournement: tournementSchema,
  university: universitySchema,
  user: userSchema,
  yearlyConfigurations: yearlyConfigurationsSchema,
};

const add = async (collectionName, data, res) => {
  try {
    const dbResponse = await schemas[collectionName].create(data);
    res
      .status(201)
      .send({ message: "New Data has been added", data: dbResponse });
  } catch (e) {
    res.status(500).send({ message: "Server error", error: e });
  }
};

const remove = async (collectionName, field, value, res) => {
  try {
    const filter = {};
    filter[field] = value;
    const dbResponse = await schemas[collectionName].findOneAndDelete(filter);
    res
      .status(200)
      .send({ message: "Data deleted successfully", data: dbResponse });
  } catch (e) {
    res.status(500).send({ message: "Server error", error: e });
  }
};

const update = async (collectionName, field, value, data, res) => {
  try {
    const filter = {};
    filter[field] = value;
    const dbResponse = await schemas[collectionName].findOneAndUpdate(
      filter,
      data,
      {
        new: true,
      }
    );
    res
      .status(201)
      .send({ message: "Data has been updated", data: dbResponse });
  } catch (e) {
    res.status(500).send({ message: "Server error", error: e });
  }
};

const read = async (collectionName, res, field = [], values = []) => {
  try {
    const filter = {};
    for (let i = 0; i < field.length; i++) {
      filter[field[i]] = { $in: values[i] };
    }
    const dbResponse = await schemas[collectionName].find(filter);
    return { message: "Data retrieved successfully", data: dbResponse };
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Server error", error: e });
  }
};

const isValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return false;
  }
  return true;
};

const getAllFields = (schemaName)=>{
  return Object.keys(schemas[schemaName].schema.paths)

}

module.exports = {
  add,
  remove,
  update,
  read,
  isValidObjectId,
  getAllFields
};
