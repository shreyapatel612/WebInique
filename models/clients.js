const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        require : true
    },
    review : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('clients', clientSchema);