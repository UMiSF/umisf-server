const express = require('express');
const photoController = require('../controller/photoContoller');
const router = express.Router();

router.get('/getAll', photoController.getAllPhotos);

router.post('/add', photoController.addPhoto);

router.put('/update', photoController.updatePhoto);

module.exports = router;
