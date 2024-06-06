const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rooms = new Schema({
    code:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    wing:{
        type:String,
        Enum:['west','east','north','south'],
        required:true
    },
    pax:{
        type:Number,
        Enum:[2,3,4],
        required:true
    },
    category:[{
        type:Schema.Types.ObjectId,
        ref:'Category'
    }]
})

module.exports = mongoose.model('Rooms',Rooms);