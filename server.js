import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.js";
import nseRouter from "./routes/nse.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
dotenv.config();

//Connect mongodb, the database is in atlas
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("error in database connection", err));

//middlewares
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json());
app.use(morgan("dev"));

//route middleware
app.use("/api/auth", authRouter);
app.use("/api/nse", nseRouter);

//listening the app on the server on port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running at ${port}`));
