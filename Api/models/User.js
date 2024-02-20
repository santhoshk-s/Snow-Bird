const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username:{type:String,required:[true,'Please provide a user name'],unique:true},
    email:{type:String,required:[true,"Please provide a email address"],unique:true},
    password:{type:String,required:[true,"Please provide a password"],} ,
    profilePic:{type:String,default:""},
    isAdmin:{type:Boolean,default:false,}
},
{timestamps:true}
)


module.exports =mongoose.model("User",UserSchema)