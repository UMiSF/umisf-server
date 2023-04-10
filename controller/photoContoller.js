const databaseWrapper = require('../database/databaseWrapper');

const addPhoto = async (req, res) => {
  const { photoData } = req.body;

  if (!photoData.year|| !photoData.photos) {
    return res.status(400).send({ message: 'required data not filled' });
  }

  for(const photo of photoData.photos){
    //add to cloudinary
    //get the url and update existing
  }
  return await databaseWrapper.add('photo', photoData, res);
};

const getAllPhotos = async (req, res) => {
  const {year} = req.query;
  const result = await databaseWrapper.read('photo', res, ['year'], [year]);
  res.status(201).send({ message: result.message, data: result.data });
};

const updatePhoto = async (req, res) => {
  try {
    const { field, value, toBeUpdated, photos } = req?.body || {};
    console.log(field, value, data)


    for (const photo of photos){
      //add to cloudinary and get the new url array 
    }
    if (!field || value==null || !data) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    //TODO: change the data to url array
    return await databaseWrapper.update('photo', field, value, { "$push": { toBeUpdated: { "$each": data } } }, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

module.exports = {
  addPhoto,
  getAllPhotos,
  updatePhoto,
};
