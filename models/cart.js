const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

},{
    timestamp:true
}
)
module.exports = mongoose.model('Cart',cartSchema)