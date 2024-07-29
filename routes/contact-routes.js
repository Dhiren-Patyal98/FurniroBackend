const express = require('express')

const router = express.Router();

const contactControllers = require('../controllers/contactController');

router.post('/contact',contactControllers.contactDetails);

router.get('/getcontact',contactControllers.getContact)

module.exports = router;