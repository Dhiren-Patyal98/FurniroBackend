const mongoose = require('mongoose');
const orderItemsSchema = mongoose.Schema({
    orderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Orders'
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },

    color:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
},

{timestamp:true}

)

module.exports = mongoose.model('OrderItems',orderItemsSchema)