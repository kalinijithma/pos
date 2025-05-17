const mongoose=require('mongoose');
const  userSchema=new mongoose.Schema({
    username:{
        required:true,
        typr:String
    },

    password:{
        required:true,
        typr:String
    },

    fullName:{
        required:true,
        typr:String
    },

    address:{
        required:true,
        typr:String
    },

    status:{
        required:true,
        typr:Boolean
    },

    city:{
        required:true,
        typr:String
    }
});

module.exports=mongoose.model('user',userSchema);