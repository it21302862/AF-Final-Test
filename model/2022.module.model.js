const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Module = new Schema({
    moduleId:{
        type:String,
        required:true,
        unique: true
    },
    moduleName:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    lectureIds:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    acdemicYear:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Module',Module);