const express = require('express');
const playerController = require('../controller/playerController');
const router = express.Router();

router.get('/getAll', playerController.getAllPlayers);

router.post('/add', playerController.addPlayer);

router.delete('/removeByField/:field/:value', playerController.deleteByField);

router.put('/update', playerController.updatePlayer);

module.exports = router;
