const jwt = require("jsonwebtoken");
require("dotenv").config();

const authRequired = (req,res,next)=>{

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        });
    }

    try{

        const decoded = jwt.verify(
            token,
            process.env.TOKEN_KEY
        );

        req.user = decoded;

        next();

    }catch(err){

        return res.status(401).json({
            success:false,
            message:"Invalid Token"
        });

    }
};

module.exports = authRequired;