const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    
},{
    timestamp:true,
})

module.exports=mongoose.model('Review',reviewSchema)