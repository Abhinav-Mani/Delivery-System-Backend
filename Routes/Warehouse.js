const route=require("express").Router();

const WarehouseController = require("../Controllers/Warehouse");

const authCheck = require("../util/AuthCheker");
const adminCheck = require("../util/isAdmin");

route.post("/",authCheck,adminCheck,WarehouseController.ADD);
route.get("/",authCheck,adminCheck,WarehouseController.GET);

module.exports = route