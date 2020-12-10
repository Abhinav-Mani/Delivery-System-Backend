
const pool= require("../util/database");
const { json } = require("body-parser");

module.exports.ADD =(req,res)=> {
    const uuid=req.body.uuid
    const picode=req.body.picode
    const longitude= req.body.longitude
    const latitute = req.body.latitute
    const product = [uuid,picode,longitude,latitute]
    addProduct(product);
    async function addProduct(data){
        try{
            await pool.query("INSERT INTO RetailerLocation VALUES(?,?,?,?)",data);
            res.status(201);
            res.json({"status":"OK"})
        }catch(error){
            res.json(error);
            res.status(500);
        }
    }

}
module.exports.GET=(req,res)=>{
    getProduct();
    async function getProduct(){
        try{
            const [value,extra] =await pool.query("SELECT * FROM RetailerLocation")
            res.status(201);
            res.json(value)
        }catch(error){
            res.json(error);
            res.status(500);
        }
    }
}