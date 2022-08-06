import express from "express";
import { bankNifty, nifty } from "../controllers/nse.js";

const authRouter = express.Router();

authRouter.get("/banknifty", bankNifty);
authRouter.get("/nifty", nifty);

export default authRouter;