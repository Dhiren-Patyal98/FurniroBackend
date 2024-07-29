const address = require('../models/address');
const user = require('../models/user');

const AddressDetails = async (req,res) =>
{ 
    try{


        const useridds = req.body.userid;
        const addressCreate = new address({
            userid: useridds,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            companyName:req.body.companyName,
            streetAddress:req.body.streetAddress,
            city:req.body.city,
            province:req.body.province,
            state:req.body.state,
            zipCode:req.body.zipCode,
            country:req.body.country,
            phone:req.body.phone,
            email:req.body.email,
            additionalInformation:req.body.additionalInformation,

        }) ;

        const userval = await user.findOne({_id : useridds})
         if(userval){
            const user_address = await addressCreate.save();
            res.status(200).send({success: true , data : user_address});

         }
         else{
            res.status(404).send({success:false , msg: "please login first"})
         }
    }
    catch(err)
    {
        res.status(404).send(err.message);
    }
};


const getAddress = async (req,res) =>
{
    const getdata = await address.find();
    res.send({data : getdata});
};

exports.getAddress = getAddress;
exports.AddressDetails = AddressDetails;