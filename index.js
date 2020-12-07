const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const port = process.env.PORT
const app = express();
app.use("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})