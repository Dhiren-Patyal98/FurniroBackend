const mongoose = require('mongoose');
 
const ordersSchema =  mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    addressid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    totalAmount:{
        type:Number,
        required:true,
    },
    
      orderDate:{
        type: Date
    },
    
    orderStatus:{
        type:String,
        required:true,
    },

},
{
    timestamp:true,
});

module.exports = mongoose.model('Orders',ordersSchema)