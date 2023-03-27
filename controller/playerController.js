const databaseWrapper = require('../database/databaseWrapper');

const addPlayer = async (req, res) => {
  const  playerData  = req.body;
  for (let i = 0; i < playerData.length; i++) {
    const player = playerData[i];
    if (
      !player.firstName ||
      !player.lastName ||
      !player.institute ||
      !player.performanceThreshold ||
      !player.gender ||
      !player.contactNumber ||
      !player.photo
    ) {
      return res.status(400).send({ message: 'required data not filled' });
    }
  }

  return await databaseWrapper.add('player', playerData, res);
}; 

const getAllPlayers = async (req, res) => {
  const result =  await databaseWrapper.read('player', res);
    res
      .status(201)
      .send({ message: result.message, data: result.data });
};

const deleteByField = async (req, res) => {
  try {
    const { field, value } = req?.params;
    if (!field || !value) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    return await databaseWrapper.remove('player', field, value, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const { field, value, data } = req?.body;

    //todo: data should validate

    if (!field || !value || !data) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    return await databaseWrapper.update('player', field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

module.exports = {
  addPlayer,
  getAllPlayers,
  deleteByField,
  updatePlayer,
};
