const databaseWrapper = require('../database/databaseWrapper');

const add = async (req, res) => {
  try {
    const { companyDetails, players } = req?.body;
    return await databaseWrapper.atomicDualCreate(
      { name: 'player', data: players },
      { name: 'company', data: companyDetails },
      'players',
      res
    );
  } catch (error) {
    console.log('Error adding company', error);
    return res.status(500).send('Internal Server Error');
  }
};

const getAll = async (req, res) => {
  const result = await databaseWrapper.read('company', res);
  return res.status(201).send({ message: result.message, data: result.data });
};

const deleteByField = async (req, res) => {
  try {
    const { field, value } = req?.params;
    if (!field || !value) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    return await databaseWrapper.remove('company', field, value, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

const update = async (req, res) => {
  try {
    const { field, value, data } = req?.body;

    if (!field || !value || !data) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    const validateArray = Object.keys(data).filter((field) => {
      return !databaseWrapper.getAllFields('company').includes(field);
    });
    if (validateArray.length != 0) {
      return res.status(400).send('Invalid field for schema -> company');
    }
    return await databaseWrapper.update('company', field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

module.exports = {
  add,
  getAll,
  deleteByField,
  update,
};
