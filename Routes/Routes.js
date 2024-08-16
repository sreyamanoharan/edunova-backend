import express, { Router } from "express";
const userRouter = express.Router();
import { memberReg } from "../Controllers/Controller.js";

userRouter.post('/register',memberReg)


export default userRouter