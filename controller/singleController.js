const databaseWrapper = require("../database/databaseWrapper");
const single = require("../models/single");

const addSingle = async (req, res) => {
  try {
    const { singleData } = req.body;
    for (let i = 0; i < singleData.length; i++) {
      const single = singleData[i];
      if (!single.ageGroup || !single.matchType || !single.player || !single.paymentMethod) {
        return res.status(400).send({ message: "required data not filled" });
      } else {
        //check whether a valid object id
        if (databaseWrapper.isValidObjectId(single.player)) {
          //check whether all the fields are valid
          const validateArray = Object.keys(single).filter((field) => {
            return !databaseWrapper.getAllFields("single").includes(field);
          });
          if (validateArray.length != 0) {
            return res.status(400).send("Invalid field for schema -> Single");
          }
          //check whether the player has registered
          const player = await databaseWrapper.read("player", res, ["_id"], [single.player]);

          if (player.data == null || player.data.length == 0) {
            return res.status(400).send("Invalid Player ID. Register as a player first");
          }
          //check whether the player already registered for single
          const singlePlayer = await databaseWrapper.read("single", res, ["player"], [single.player]);
          if (singlePlayer.data?.length != 0) {
            return res.status(409).send("This player ID is already registered for a single match");
          }
        } else {
          return res.status(400).send("Invalid Player ID");
        }
      }
      return await databaseWrapper.add("single", singleData, res);
    }
  } catch (error) {
    console.log("Error adding single", error);
    return res.status(500).send("Internal Server Error");
  }
};

const getAllSingles = async (req, res) => {
  const result = await databaseWrapper.read("single", res);
  return res.status(201).send({ message: result.message, data: result.data });
};

const deleteByField = async (req, res) => {
  try {
    const { field, value } = req?.params;
    if (!field || !value) {
      return res.status(400).send({ message: "required data not filled" });
    }
    return await databaseWrapper.remove("single", field, value, res);
  } catch (e) {
    return res.status(400).send({ message: "Bad Request", error: e });
  }
};

const updateSingle = async (req, res) => {
  try {
    const { field, value, data } = req?.body;

    if (!field || !value || !data) {
      return res.status(400).send({ message: "required data not filled" });
    }
    const validateArray = Object.keys(data).filter((field) => {
      return !databaseWrapper.getAllFields("single").includes(field);
    });
    if (validateArray.length != 0) {
      return res.status(400).send("Invalid field for schema -> Single");
    }
    return await databaseWrapper.update("single", field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: "Bad Request", error: e });
  }
};

module.exports = {
  addSingle,
  getAllSingles,
  deleteByField,
  updateSingle,
};
