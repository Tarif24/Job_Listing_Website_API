import express from "express";
import {
    getAllJobs,
    create,
    update,
    deleteJob,
} from "../controller/jobController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllJobs", getAllJobs);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteJob);

export default route;
