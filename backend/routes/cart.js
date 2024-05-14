const express = require("express");
const { addtoCart, deleteFromCart } = require("../controllers/cart");

//authentication and authorization
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const cartRouter = express.Router();

cartRouter.post("/:id",authentication,addtoCart);
cartRouter.delete("/:id",authentication,deleteFromCart);

module.exports = cartRouter;