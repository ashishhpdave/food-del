import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

const cartRoueter = express.Router();

cartRoueter.post("/add",authMiddleware,addToCart)
cartRoueter.post("/remove",authMiddleware,removeFromCart)
cartRoueter.post("/get",authMiddleware,getCart)

export default cartRoueter