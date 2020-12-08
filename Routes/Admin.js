const route=require("express").Router();

const AdminController = require("../Controllers/Admin");

route.post("/signin",AdminController.SIGNIN);

module.exports = route