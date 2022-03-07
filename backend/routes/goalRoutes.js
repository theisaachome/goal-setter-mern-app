const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({message:"Get Goals..."})
})


router.get("/:id",(req,res,next)=>{
    res.status(200).json({message:`Get Goals with ${id}`})
})



router.post("/",(req,res,next)=>{
    res.status(200).json({message:"Create Goals..."})
})



router.put("/:id",(req,res,next)=>{
    res.status(200).json({message:`Update a Goals with ${id}`})
})


router.delete("/:id",(req,res,next)=>{
    res.status(200).json({message:`delete a Goals with ${id}`})
})





module.exports = router;