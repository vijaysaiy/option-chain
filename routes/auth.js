import express from "express";
import { register, login, testnifty } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", testnifty);
authRouter.post("/login", login);
authRouter.get("/testnifty", testnifty);


export default authRouter;