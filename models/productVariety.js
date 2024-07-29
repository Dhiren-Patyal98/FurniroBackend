const mongoose = require('mongoose');

const productVarietySchema = mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    color:{
        type: String,
        required:true,
    },
    image: [{
        type: String,
        required: true,
    }],
    
    price:{
        type: Number,
        required:true,
    },
   
    

},
{
    timestamps:true
}

);

module.exports = mongoose.model('ProductVariety',productVarietySchema)