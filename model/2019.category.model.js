const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type:Number,
        required:true
    },
    rooms:[{
        type:Schema.Types.ObjectId,
        ref:'Rooms'
    }]
      
})

module.exports = mongoose.model('Category',Category)