const route=require("express").Router();

const ProductController = require("../Controllers/Products");

const authCheck = require("../util/AuthCheker");
const adminCheck = require("../util/isAdmin");

route.post("/",authCheck,adminCheck,ProductController.ADD);
route.get("/", ProductController.GET);

module.exports = route