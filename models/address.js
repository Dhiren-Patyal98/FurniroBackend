const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    companyName:{
        type:String,
        required: true,
    },
    streetAddress:{
        type:String,
        required: true,
    },
    city:{
        type:String,
        required: true,
    },
    province:{
        type:String,
        required: true,
    },
    state:{
        type:String,
        required: true,
    },
    zipCode:{
        type:Number,
        required: true,
    },
    country:{
        type:String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    additionalInformation:{
        type:String,
        required: true,
    },


},{
    timestamp:true
}
)
module.exports = mongoose.model('Address',addressSchema)