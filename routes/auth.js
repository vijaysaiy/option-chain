import express from "express";
import { register, login } from "../controllers/auth.js";
import { testnifty } from "../controllers/nse.js";

const authRouter = express.Router();

authRouter.post("/register", testnifty);
authRouter.post("/login", login);

export default authRouter;