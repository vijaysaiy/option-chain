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
const corsOpts = {
  origin: "*",
  referer: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(morgan("dev"));

//route middleware
app.use("/api/auth", authRouter);
app.use("/api/nse", nseRouter);
app.use(cors(corsOpts));


//listening the app on the server on port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running at ${port}`));
