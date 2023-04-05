const databaseWrapper = require("../database/databaseWrapper");

const addUniversity = async (req, res) => {
  //TODO: email the IDs
  try {
    const {universityDetails, players} = req?.body;
    return await databaseWrapper.atomicDualCreate({name:'player', data:players}, {name:'university', data:universityDetails}, 'players',res)
  } catch (error) {
    console.log("Error adding university", error);
    return res.status(500).send("Internal Server Error");
  }
};

const getAllUniversities = async (req, res) => {
  const result = await databaseWrapper.read("university", res);
  return res.status(201).send({ message: result.message, data: result.data });
};

const deleteByField = async (req, res) => {
  try {
    const { field, value } = req?.params;
    if (!field || !value) {
      return res.status(400).send({ message: "required data not filled" });
    }
    return await databaseWrapper.remove("university", field, value, res);
  } catch (e) {
    return res.status(400).send({ message: "Bad Request", error: e });
  }
};

const updateUniversity = async (req, res) => {
  try {
    const { field, value, data } = req?.body;

    if (!field || !value || !data) {
      return res.status(400).send({ message: "required data not filled" });
    }
    const validateArray = Object.keys(data).filter((field) => {
      return !databaseWrapper.getAllFields("university").includes(field);
    });
    if (validateArray.length != 0) {
      return res.status(400).send("Invalid field for schema -> University");
    }
    return await databaseWrapper.update("university", field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: "Bad Request", error: e });
  }
};

// load the universities that are {not confirmed} the payments and approve

module.exports = {
  addUniversity,
  getAllUniversities,
  deleteByField,
  updateUniversity,
};
