const express=require("express");
const router=express.Router();
const {handleGenerateNewShortURL ,handleGet, handleGetAnalytics}=require("../controllers/url");

router.post("/url",handleGenerateNewShortURL);
router.get("",handleGet );
router.get("/:shortId",handleGenerateNewShortURL);
module.exports=router;