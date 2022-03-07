const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');
const User =  require("../models/user");

const requiredSigin = asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from headers
            token=req.headers.authorization.split(' ')[1];

            // verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (err) {
            console.log(err);
            res.status(401);
            throw new Error("Not Authorized")
        }
    }
    if(!token){
        res.status(401);
        throw new Error("Not Authorized")
    }
})

module.exports={
    requiredSigin,
}