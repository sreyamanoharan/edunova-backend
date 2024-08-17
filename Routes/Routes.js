import express, { Router } from "express";
const userRouter = express.Router();
import { memberReg } from "../Controllers/Controller.js";
import { allMembers } from "../Controllers/Controller.js";
import { deleteMember } from "../Controllers/Controller.js";
import { UpdateMember } from "../Controllers/Controller.js";

userRouter.post('/register',memberReg)
userRouter.get('/members',allMembers)
userRouter.delete('/members/:id',deleteMember );
userRouter.put('/members/:id',UpdateMember)




export default userRouter