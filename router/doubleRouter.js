const express = require('express');
const doubleController = require('../controller/doubleController');
const router = express.Router();

router.get('/getAll', doubleController.getAll);

router.post('/add', doubleController.add);

router.delete('/removeByField/:field/:value', doubleController.deleteByField);

router.put('/update', doubleController.update);

module.exports = router;
