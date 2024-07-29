const mongoose = require('mongoose')

const cartItemsSchema = mongoose.Schema({
    cartid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cart'
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    quantity:{
        type:Number,
        required:true
        
    },


},{
    timestamp:true
}
)
module.exports = mongoose.model('CartItems',cartItemsSchema)