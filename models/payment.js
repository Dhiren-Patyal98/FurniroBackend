const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    orderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Orders'
    },
    paymentMethod:{
        type: String,
        required:true,
    },
    paymentid:{
        type: String,
        required:true,
    },
    paymentDate:{
        type: Date,
       
    },
    amount:{
        type: Number,
        required:true,
    },
    status:{
        type: String,
        required:true,
    },
    

},
{
    timestamps:true
}

);

module.exports = mongoose.model('Payment',paymentSchema)