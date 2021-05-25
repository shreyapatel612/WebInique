const mongoose = require('mongoose');

const aboutusSchema = mongoose.Schema({
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

module.exports = mongoose.model('aboutus', aboutusSchema);