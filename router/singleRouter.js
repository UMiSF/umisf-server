const express = require('express');
const singleController = require('../controller/singleController');
const router = express.Router();

router.get('/getAll', singleController.getAllSingles);
router.get('/testMail', singleController.testMail);

router.post('/add', singleController.addSingle);

router.delete('/removeByField/:field/:value', singleController.deleteByField);

router.put('/update', singleController.updateSingle);

module.exports = router;
