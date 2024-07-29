const express = require('express')

const router = express.Router();

const reviewControllers = require('../controllers/reviewController');

router.post('/review',reviewControllers.reviewDetails);

router.get('/getreview',reviewControllers.getReview);

module.exports = router;