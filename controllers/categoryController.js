
const category = require ('../models/category')
const categoryDetails = async(req,res) =>
{
    try{
        const categoryUpdate = new category({
            description: req.body.description
        })

        const product_category = await categoryUpdate.save();
        res.status(200).send({success:true, data : product_category})
    }
    catch(err)
    {
        res.status(404).send(err.message);
    }
};

const getCategory = async (req,res,next) =>{
    const getdata= await category.find();
    res.send({data:getdata})
 }
exports.categoryDetails = categoryDetails;
exports.getCategory = getCategory;