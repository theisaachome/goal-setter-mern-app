
const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User' // the name of The model
    },
    text:{
        type:String,
        required:[true,"Please add a text value."]
    },
    description:{
        type:String,    
        maxLength:[500,"Please no more than 500 character"],
    },
    typeOfGoal:{
        type:String,
        enum:["Yearly","Monthly","Weekly","Daily"],
        default:"Daily"
    },
    goalStatus:{
        type:String,
        enum:["Completed","In Progress","Planned"],
        default:"Planned"
    }
},{
    timestamps:true,
});

module.exports= mongoose.model("Goal",GoalSchema);

