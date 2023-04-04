const express = require('express');
const feedbackController = require('../controller/feedbackController');
const router = express.Router();

router.get('/getAll', feedbackController.getAllFeedbacks);
router.get('/getAllNotViewed', feedbackController.getFeedbacksNotViewed)

router.post('/add', feedbackController.addFeedback);

router.put('/update', feedbackController.updateFeedback);


module.exports = router;
