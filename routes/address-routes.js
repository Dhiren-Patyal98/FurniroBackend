const express = require('express')

const router = express.Router();

const addressControllers = require('../controllers/addressController')

router.post('/address',addressControllers.AddressDetails);

router.get('/getaddress',addressControllers.getAddress);

module.exports = router;