const express = require('express')

const router = express.Router();

const categoryControllers = require('../controllers/categoryController')


router.post('/category',categoryControllers.categoryDetails);

router.get('/getcategory',categoryControllers.getCategory)

module.exports = router;