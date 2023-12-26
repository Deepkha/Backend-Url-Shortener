const mongoose= require("mongoose");
const shortid=require("shortid");
const UrlSchema=new mongoose.Schema(
    {
        ShortId:{
            type:String,
            required:true,
            unique:true,
            default:shortid.generate
        },
        redirectURL:{
            type:String,
            required:true
        }
      
    },{
        timestamp:true
    }

);
const URL =mongoose.model("url",UrlSchema);

module.exports=URL;