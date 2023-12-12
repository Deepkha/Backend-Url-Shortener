const ShortUniqueId = require('short-unique-id');
const URL=require("../models/url");


async function handleGenerateNewShortURL(req,res){
    const body=req.body; 
    if( !body.url) return res.status(400).json( { error:"url is required"} );
    
    const uid = new ShortUniqueId();
    const shortId= uid.stamp(8);
    
    const news=await URL({
        shortId:shortId,
        redirectURL:body.url,
        visitedHistory:[],
    });
    try {
      
  
        const news=new contact.save();
        return res.json({id:shortId});
       
      } catch (error) {
        console.error("Failed to save contact", error);
        res.status(500).json({msg:"error"});
      }
    
}
module.exports={handleGenerateNewShortURL};