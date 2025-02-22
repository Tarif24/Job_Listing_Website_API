import express from "express";
import { getAllJobs, create } from "../controller/jobController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllJobs", getAllJobs);

export default route;
