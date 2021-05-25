const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        require : true
    },
    total : {
        type : Number,
        require : true
    }
})

module.exports = mongoose.model('work', workSchema);