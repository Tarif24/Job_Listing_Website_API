import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/jobRoute.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const app = express();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("DATABASE CONNECTION SUCCESSFUL");
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

app.use("/api/job", route);
