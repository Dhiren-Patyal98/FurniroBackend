const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cart_route = require("./routes/cart-routes")
const user_route  = require("./routes/user-routes");
const review_route = require('./routes/review-routes')
const orders_route = require("./routes/orders-routes")
const contact_route = require("./routes/contact-routes")
const address_routes = require('./routes/address-routes')
const category_route  = require("./routes/category-routes")
const products_routes  = require("./routes/products-routes")


const app = express();

app.use(bodyParser.json( ));

const conn = mongoose.connect("mongodb://127.0.0.1:27017/furniro").then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


  


app.use('/api/user', user_route);

app.use('/api/contactpage',contact_route)

app.use('/api/categorypage',category_route)

app.use('/api/productpage',products_routes)

app.use('/api/addresspage',address_routes);

app.use('/api/orderpage',orders_route);

app.use('/api/cartpage',cart_route);

app.use('/api/reviewpage',review_route)

const port = 5000;

app.listen(port , function (){
    console.log('connected to port 5000')
});