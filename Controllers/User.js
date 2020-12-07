const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

const secret= process.env.ACCESS_TOKEN_SECRET
let salRounds=Number(process.env.SALT_ROUND);

const pool= require("../util/database");
const { json } = require("body-parser");

module.exports.SIGNUP=(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const pincode = req.body.pincode
    const address = req.body.address
    const longitude = req.body.longitude
    const latitute = req.body.latitute
    const password = req.body.password
    const phoneno = req.body.phoneno
    bcryptjs.hash(password,salRounds).then(hash=>{
        const data =[username,email,pincode,address,longitude,latitute,hash,phoneno]
        addUser(data)
    }).catch(err=>{
        res.json({error:"Internal Server Error"}).status(500);
    })
    async function addUser(data){
        try{
            await pool.query("INSERT INTO users VALUES(?,?,?,?,?,?,?,?)",data);
            res.status(201);
            res.json({"status":"OK"})
        }catch(err){
            res.json({error:err})
            res.status(500);
        }
    }

}

module.exports.SIGNIN=(req,res)=>{
    res.send("SIGNIN Route");
}