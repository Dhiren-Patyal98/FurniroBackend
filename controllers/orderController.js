const orders = require('../models/orders');
const address = require('../models/address');

const user = require('../models/user');

const orderItems = require('../models/orderItems')
const products = require('../models/products')

const orderDetails = async(req,res) =>
{
    try{
           const useridd = req.body.userid;
           const addressidd= req.body.addressid;
         const orderCreate = new orders({
             userid:useridd,
             addressid:addressidd,
             totalAmount:req.body.totalAmount,
             orderDate:req.body.orderDate,
             orderStatus:req.body.orderDate,
         });

         const userval = await user.findOne({_id:useridd})
         const addressval = await address.findOne({_id:addressidd})

         if(addressval && userval)
         {
            const order_add = await orderCreate.save();
            res.status(200).send({success:true, data: order_add})
         }
         else{
            res.status(404).send({success:false, msg:"address is not given for the user "})
         }
    }
    catch(err){
        
        res.status(404).send(err.message);

    }
};

const getOrder = async(req,res) =>
{
    const getdata = await orders.find();
    res.send({data:getdata})
}

/////////////////////////////////////////////////////////////////

const orderItemsDetails = async (req,res) =>
{
    try{

        const orderidd = req.body.orderid;
        const productidd = req.body.productid;
        const orderItemsCreate = new orderItems({
            orderid:orderidd,
            productid:productidd,
            quantity:req.body.quantity,
            price:req.body.price,
            color:req.body.color,
            size:req.body.size,
        })

        const orderidval = await orders.findOne({_id:orderidd})
        const productidval = await products.findOne({_id:productidd})

        if(orderidval && productidval)
        {
            const orderItemsAdd = await orderItemsCreate.save();
           
            res.status(200).send({success:true , data:orderItemsAdd})
        }
        else
        {
            res.status(404).send({success:false, msg:"order_id or product_id doesnt exists"})
        }

    }
    catch(err) 
    {
      res.status(404).send(err.message)
    }
}

const getorderItems =async(req,res)=>
{
    const getdata = await orderItems.find();
    res.json(getdata);
}


exports.getorderItems = getorderItems;
exports.orderItemsDetails = orderItemsDetails;


exports.getOrder = getOrder;
exports.orderDetails = orderDetails;