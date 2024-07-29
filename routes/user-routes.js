const express = require('express');

const router = express.Router();

const {check} = require("express-validator");

const userControllers = require('../controllers/userController');

router.post('/register',[
    check('email')
    .normalizeEmail()
    .isEmail(),
    check('password').isLength({min:6})

],userControllers.register_user);

router.post('/login',userControllers.user_login);

module.exports = router;