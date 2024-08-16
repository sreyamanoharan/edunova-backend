import express, { Router } from "express";
const userRouter = express.Router();
import { memberReg } from "../Controllers/Controller.js";
import { allMembers } from "../Controllers/Controller.js";

userRouter.post('/register',memberReg)
userRouter.get('/members',allMembers)


export default userRouter