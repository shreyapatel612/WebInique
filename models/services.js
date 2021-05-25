const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('services', serviceSchema);