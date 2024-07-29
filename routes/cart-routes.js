const express = require('express')

const router = express.Router();

const cartControllers = require('../controllers/cartController')

router.post('/cart',cartControllers.cartDetals);

router.get('/getcart',cartControllers.cartGet);

router.post('/cartitems',cartControllers.CartItemsadd);

router.get('/getcartitems',cartControllers.getCartItems);

module.exports = router;