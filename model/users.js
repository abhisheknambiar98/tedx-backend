var mongoose=require('mongoose');
var config=require('../config/database')

//schema
const UserSchema= mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String,
    required:true
  },
  organisation:{
    type:String,
    required:true
  },
  mobile:{
    type:Number,
    required:true
  }
});

const User= mongoose.model('User',UserSchema);
module.exports=User;
