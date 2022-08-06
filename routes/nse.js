import express from "express";
import { bankNifty, nifty, testnifty } from "../controllers/nse.js";

const authRouter = express.Router();

authRouter.get("/banknifty", bankNifty);
authRouter.get("/nifty", nifty);
authRouter.get("/testnifty", testnifty);

export default authRouter;
