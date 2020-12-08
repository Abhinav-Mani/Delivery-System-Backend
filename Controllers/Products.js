
const pool= require("../util/database");
const { json } = require("body-parser");

module.exports.ADD =(req,res)=> {
    const name=req.body.name
    const id=req.body.id
    const price = req.body.price
    const description = req.body.description
    const image = req.body.image
    const product = [name,id,price,description,image]
    addProduct(product);
    async function addProduct(data){
        try{
            await pool.query("INSERT INTO products VALUES(?,?,?,?,?)",data);
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
            const [value,extra] =await pool.query("SELECT * FROM products")
            res.status(201);
            res.json(value)
        }catch(error){
            res.json(error);
            res.status(500);
        }
    }
}