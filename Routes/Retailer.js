const route=require("express").Router();

const ReatailerController = require("../Controllers/Retailer");

const authCheck = require("../util/AuthCheker");
const adminCheck = require("../util/isAdmin");

route.post("/",authCheck,adminCheck,ReatailerController.ADD);
route.get("/",authCheck,adminCheck,ReatailerController.GET);

module.exports = route