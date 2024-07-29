const products = require('../models/products')
const user = require('../models/user')
const review = require('../models/review')

const reviewDetails = async(req,res)=>

    {
        try{
           const useridd = req.body.userid;
           const addReview = new review({
            userid: useridd,
            productid:req.body.productid,
            rating:req.body.rating,
            comment:req.body.comment,
           })
           const userval = await user.findOne({_id:useridd})
           if(userval){
            const createReview = await addReview.save();
            res.status(200).send({success:true,data: createReview})
           }
           else{
            res.status(404).send({success:false, msg:"please login first"})
         }
        }
        catch(err)
        {
            res.status(404).send(err.message);
        }
    }

    const getReview = async(req,res) =>
    {
        const getdata = await review.find();
        res.send({data:getdata})
    }

    exports.getReview = getReview;
    exports.reviewDetails = reviewDetails