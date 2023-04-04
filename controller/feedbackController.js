const databaseWrapper = require('../database/databaseWrapper');

const addFeedback = async (req, res) => {
  const { feedbackData } = req.body;

  if (!feedbackData.firstName || !feedbackData.lastName || !feedbackData.email || !feedbackData.message || !feedbackData.sentDate) {
    return res.status(400).send({ message: 'required data not filled' });
  }

  return await databaseWrapper.add('feedback', feedbackData, res);
};

const getAllFeedbacks = async (req, res) => {
  const result = await databaseWrapper.read('feedback', res);
  res.status(201).send({ message: result.message, data: result.data });
};

const updateFeedback = async (req, res) => {
  try {
    const { field, value, data } = req?.body || {};
    console.log(field, value, data)
    //todo: data should validate

    if (!field || value==null || !data) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    return await databaseWrapper.update('feedback', field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

const getFeedbacksNotViewed = async (req, res) => {
  const result = await databaseWrapper.read('feedback', res, ["hasViewed"], [false] );
  res.status(201).send({ message: result.message, data: result.data });
};

module.exports = {
  addFeedback,
  getAllFeedbacks,
  getFeedbacksNotViewed,
  updateFeedback,
};
