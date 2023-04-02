const databaseWrapper = require("../database/databaseWrapper");

const addPlayer = async (req, res) => {
  //TODO: email the player id
  const { playerData } = req.body;
  for (let i = 0; i < playerData.length; i++) {
    const player = playerData[i];
    if (!player.firstName || !player.lastName || !player.institute || !player.performanceThreshold || !player.gender || !player.contactNumber || !player.photo) {
      return res.status(400).send({ message: "required data not filled" });
    }
    //check whether the player already registered
    const playerExist = await databaseWrapper.read("player", res, ["email"], [player.email]);
    console.log("Player exists: ", playerExist);
    if (playerExist.data?.length != 0) {
      return res.status(409).send({ message: "This email is already used for a player" });
    }
  }

  return await databaseWrapper.add("player", playerData, res);
};

const getAllPlayers = async (req, res) => {
  const result = await databaseWrapper.read("player", res);
  res.status(201).send({ message: result.message, data: result.data });
};

const deleteByField = async (req, res) => {
  try {
    const { field, value } = req?.params;
    if (!field || !value) {
      return res.status(400).send({ message: "required data not filled" });
    }
    return await databaseWrapper.remove("player", field, value, res);
  } catch (e) {
    return res.status(400).send({ message: "Bad Request", error: e });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const { field, value, data } = req?.body;

    //todo: data should validate

    if (!field || !value || !data) {
      return res.status(400).send({ message: "required data not filled" });
    }
    return await databaseWrapper.update("player", field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: "Bad Request", error: e });
  }
};

const getPlayerByObjectId = async (req, res) => {

  let { ids} = req?.query;
  console.log("IDs: ", ids)
  ids = ids?.split(',')
  console.log("IDs: ", ids)
//  //check whether valid object ids
  const validations = ids.filter((value)=> {return databaseWrapper.isValidObjectId(value) == false})
  if (validations.length === 0) {
    
    const player = await databaseWrapper.read("player", res, ['_id'], [ids]);
    if (player.data == null || player.data.length == 0) {
      return res.status(400).send({ message:"Invalid Player ID. Register as a player first"});
    } else {
      return res.status(201).send({ message: player.message, data: player.data });
    }
  } else {
    return res.status(400).send({ message:"Invalid ID included "});
  }
};

module.exports = {
  addPlayer,
  getAllPlayers,
  deleteByField,
  updatePlayer,
  getPlayerByObjectId
};
