const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    categoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    productName:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
        required:true,
    },
},
{timestamp:true}

)

module.exports = mongoose.model('Products',productsSchema)