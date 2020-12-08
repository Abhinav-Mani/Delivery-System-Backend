const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

const secret= process.env.ACCESS_TOKEN_SECRET
let salRounds=Number(process.env.SALT_ROUND);

const pool= require("../util/database");
const { json } = require("body-parser");

module.exports.SIGNIN=(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    if(username===process.env.ADMIN_USERNAME&&password===process.env.ADMIN_PASSWORD){
        const accessToken=jwt.sign({
            user:username,
            post:"ADMIN"
        },
            process.env.ACCESS_TOKEN_SECRET
        );
        res.json({accessToken:accessToken});
    }else{
        res.status(403);
        res.json({"staus":"Invalid"});
    }
}