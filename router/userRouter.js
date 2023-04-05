const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/getAll', userController.getAllUsers);
// router.get('/getByObjectId', userController.getUserByObjectId);

router.post('/add', userController.addUser);

router.delete('/removeByField/:field/:value', userController.deleteByField);

router.put('/update', userController.updateUser);

module.exports = router;
