const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (! req.body.url) {
    return res.status(400).json({ error: 'url is required' });
  }



  const url = await URL.create({
   redirectURL:body.url
  
   
    
  });

  try {
    const newURL = await url.save();
    return res.json({ url: newURL }); 
  }
   catch (error) {
    console.error('Failed to save URL', error);
    res.status(500).json({ msg: 'error' });
  }
}
async function handleGet(req,res){
  const shortUrls = await URL.find();
  res.json({shortUrls});
}
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortid:shortId });
  
  if ( !result ) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  return res.json({
    result
  });
}

module.exports = { handleGet,handleGenerateNewShortURL, handleGetAnalytics };
