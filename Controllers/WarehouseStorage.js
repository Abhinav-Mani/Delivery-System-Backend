
const pool= require("../util/database");
const { json } = require("body-parser");

module.exports.ADD =(req,res)=> {
    const uuid=req.body.uuid
    const id=req.body.id
    const quantity=req.body.quantity
    const data = [uuid,id,quantity]
    addProduct(data);
    async function addProduct(data){
        try{
            await pool.query("INSERT INTO warehouseStore VALUES(?,?,?)",data);
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
            const [value,extra] =await pool.query("SELECT * FROM warehouseStore")
            res.status(201);
            res.json(value)
        }catch(error){
            res.json(error);
            res.status(500);
        }
    }
}