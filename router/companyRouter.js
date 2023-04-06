const express = require('express');
const companyController = require('../controller/companyController');
const router = express.Router();

router.get('/getAll', companyController.getAll);
router.get('/getFilteredData', companyController.getFilteredData)

router.post('/add', companyController.add);

router.delete('/removeByField/:field/:value', companyController.deleteByField);

router.put('/update', companyController.update);

module.exports = router;
