const databaseWrapper = require('../database/databaseWrapper');
const { uploadFile } = require('../util/uploadFile');

const addPhoto = async (req, res) => {
  const { photoData } = req.body;
  if (!photoData.year || !photoData.photos) {
    return res.status(400).send({ message: 'required data not filled' });
  }
  const count = photoData.photos.length;
  const urls = [];

  for (let i = 0; i < count; i++) {
    const image = photoData.photos[i];
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);
    const hashString = value + '_' + timestamp + randomString;
    console.log('name', hashString);
    console.log('Uploading image...,', i);
    const url = await uploadFile(`gallery/${value}`, image, hashString);
    console.log('url', url);
    urls.push(url);
  }
  photoData.photos = urls;
  return await databaseWrapper.add('photo', photoData, res);
};

const getAllPhotos = async (req, res) => {
  const { year } = req.query;
  const result = await databaseWrapper.read('photo', res);
  res.status(201).send({ message: result.message, data: result.data });
};

const updatePhoto = async (req, res) => {
  const { field, value, toBeUpdated, images } = req?.body || {};
  console.log(field, value, toBeUpdated, images);
  if (!field || !value || !toBeUpdated || !images) {
    return res.status(400).send({ message: 'required fields are not set' });
  }

  try {
    const count = images.length;
    const urls = [];
    for (let i = 0; i < count; i++) {
      const image = images[i];
      const timestamp = new Date().getTime();
      const randomString = Math.random().toString(36).substring(2, 8);
      const hashString = value + '_' + timestamp + randomString;
      console.log('name', hashString);
      console.log('Uploading image...,', i);
      const url = await uploadFile(`gallery/${value}`, image, hashString);
      console.log('url', url);
      urls.push(url);
    }

    const result = await databaseWrapper.updateWithoutReturn(
      'photo',
      field,
      value,
      {
        $push: {
          [toBeUpdated]: {
            $each: urls,
          },
        },
      },
      res
    );
    return res.status(200).send({ message: 'photos uploaded successfully', data: result });
  } catch (e) {
    return res.status(400).send({ msg: 'internal server error', error: e.message });
  }
};

module.exports = {
  addPhoto,
  getAllPhotos,
  updatePhoto,
};

// {
//   "_id": ObjectId("61402a8c548d3400030c2c9a"),
//   "myArray": ["value1", "value2", "value3"]
// }
// db.myCollection.updateOne(
//   { "_id": ObjectId("61402a8c548d3400030c2c9a") },
//   { "$push": { "myArray": { "$each": ["value3", "value4", "value5"] } } }
// )
