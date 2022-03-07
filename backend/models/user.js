
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add a text value."]
    },
    email:{
        type:String,    
        required:[true,"Please add an email value."],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please add an email value."],
        minLenght:[8,"Please at least 8 characters"],

    }
},{
    timestamps:true,
});

module.exports= mongoose.model("User",UserSchema);

