const express = require('express');
const imageUploadController = require('../controller/imageUploadController');
const router = express.Router();



router.post('/add', imageUploadController.uploadImage);
router.post('/addMultiple', imageUploadController.uploadMultipleFiles)


module.exports = router;
