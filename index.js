const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const port = process.env.PORT
const app = express();

const userRoute = require("./Routes/User");

app.use("/user",userRoute);
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})