const route=require("express").Router();

const UserController = require("../Controllers/User");

route.post("/signup",UserController.SIGNUP);

route.post("/signin",UserController.SIGNIN);

module.exports = route