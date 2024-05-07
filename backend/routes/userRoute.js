import express from "express"
import { loginUser,ragisterUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/ragister",ragisterUser)
userRouter.post("/login",loginUser)

export default userRouter;
