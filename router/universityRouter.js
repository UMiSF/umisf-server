const express = require('express');
const universityController = require('../controller/universityController');
const router = express.Router();

router.get('/getAll', universityController.getAllUniversities);

router.post('/add', universityController.addUniversity);

router.delete('/removeByField/:field/:value', universityController.deleteByField);

router.put('/update', universityController.updateUniversity);

module.exports = router;
