import express from "express";
import { fetch } from "../controller/jobController.js";

const route = express.Router();

route.get("/fetch", fetch);

export default route;
