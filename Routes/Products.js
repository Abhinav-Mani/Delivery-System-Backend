const route=require("express").Router();

const ProductController = require("../Controllers/Products");

route.post("/",ProductController.ADD);
route.get("/", ProductController.GET);

module.exports = route