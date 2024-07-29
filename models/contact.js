const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String,
        required:true,
    },
    emailAddress:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },


},
{
    timestamps:true
});

module.exports = mongoose.model('Contact',contactSchema)