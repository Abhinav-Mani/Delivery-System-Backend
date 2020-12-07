const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const port = process.env.PORT
const app = express();

const bodyParser = require("body-parser")

const userRoute = require("./Routes/User");

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/user",userRoute);
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})