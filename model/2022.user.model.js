const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    userId:{
        type:String,
        required:true,
        unique: true
    },
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        Enum:['Admin','Lecturer','Student'],
        required:true,
    },
    other:{
        type:String
    }
});

module.exports = mongoose.model('User',User);
