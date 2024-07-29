const cart = require('../models/cart')

const user = require('../models/user')

const product = require ('../models/products')

const cartItems = require('../models/cartItems')

const cartDetals = async (req,res) =>
{
    try{
        const useridd = req.body.userid;
         const cartCreate = new cart ({
            userid:useridd,
         });
         const userval = await user.findOne({_id:useridd})
         const getuser = await cart.findOne({userid:useridd})
        if(userval){
            if(!getuser){
            const cart_add =
             await cartCreate.save();
            res.status(200).send({success:true,data: cart_add})
            }
            
        else{
            res.status(404).send({success:false, msg:"user already exists"})
         }
    }
    }
    catch(err)
    {
        res.status(404).send(err.message);
    }
};

const cartGet = async (req,res,next) =>
{
    const getdata = await cart.find();
    res.send({data:getdata})
}

const CartItemsadd = async(req,res)=>
{
    try{
        const cartidd = req.body.cartid;
        const productidd =req.body.productid;
        const createCartItems = new cartItems({
            cartid:cartidd,
            productid:productidd,
            quantity:req.body.quantity,
        }) 

        const cartidExists = await cart.findOne({_id:cartidd});
        const productidExists = await product.findOne({_id:productidd});
        if(cartidExists)

        {
            if(productidExists)
            {
            const cartItemsAdd = await createCartItems.save();
            res.status(200).send({success:true ,data:cartItemsAdd})
        }
    }
        else{
            res.status(404).send({success:false, msg:"please login first"})
         }

    }
    catch(err){

        res.status(404).send(err.message);

    }
}

const getCartItems = async (req,res)=>
{
    const getdata = await cartItems.find();
    res.send({data:getdata})
}







////////////////////////////////////////////////////////////////

exports.cartDetals = cartDetals;
exports.cartGet = cartGet;

exports.getCartItems = getCartItems;
exports.CartItemsadd = CartItemsadd;