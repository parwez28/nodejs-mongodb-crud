const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        }
    }
)

// Creating Model
const User=mongoose.model('User',userSchema);

// Export
module.exports=User;