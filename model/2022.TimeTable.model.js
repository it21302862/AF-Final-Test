const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeTable = new Schema({
    moduleId:{
        type:Schema.Types.ObjectId,
        ref:'Module',
        required:true
    },
    timeSlots:{
        type:String,
        required:true
    },
    day: String
});

module.exports = mongoose.model('TimeTable',TimeTable);