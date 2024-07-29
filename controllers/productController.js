const products = require('../models/products')
const category = require('../models/category');
const productVariety = require('../models/productVariety')


const protuctDetails = async (req, res) => {
    try{

        const categoryid = req.body.categoryid;
        const product = new products ({
            categoryid:req.body.categoryid,
            productName:req.body.productName,
            productDescription:req.body.productDescription
        });

        const categoryval = await category.findOne({_id: categoryid})

        if(categoryval){
            const products_update = await product.save();
            res.status(200).send({success:true, data : products_update})
        }
        else{
            res.status(404).send({success:false,msg:"category doesnt exists"})
        }

    }
    catch(err)
    {
      res.status(404).send(err.message);
    }
};

const getProducts = async (req,res,next) =>
{
    const getdata = await products.find();
    res.send({data:getdata})
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const productVarient = async (req,res) =>
{
    try{
        const productidd = req.body.productid
        console.log(productidd);
        
         const product_Vary = new productVariety({
            productid:productidd,
            color:req.body.color,
            image:req.body.image,
            price:req.body.price,
         })

         const productidval = await products.findOne({_id : productidd});
         console.log(productidval)

         if(productidval)
         {
            const productVaryUpdate = await product_Vary.save();
            res.status(200).send({success:true , data : productVaryUpdate })
         }
         else
         {
            res.status(404).send({success:false , msg:"product id doesnt match"})
         }
    }
    catch(err)
    {
         res.status(404).send(err.message)
    }
}


const getProductvariety = async(req,res) =>
{
    const getdata = await productVariety.find();
    res.send({data:getdata})
}


exports.productVarient =productVarient;
exports.getProductvariety = getProductvariety;

exports.protuctDetails = protuctDetails;
exports.getProducts = getProducts;