const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        index : 
        {
            unique : true
        }
    },
    subject : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('contactus', contactSchema);