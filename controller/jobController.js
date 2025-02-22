import jobModel from "../model/jobModel.js";
import Job from "../model/jobModel.js";

export const create = async (req, res) => {
    try {
        const jobData = new Job(req.body);
        const { id } = jobData;

        const jobExist = await Job.findOne({ id });
        if (jobExist) {
            return res.status(400).json({ message: "JOB ALREADY EXISTS" });
        }

        const savedJob = await jobData.save();
        res.status(200).json(savedJob);
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();

        if (jobs.length === 0) {
            return res.status(404).json({ message: "NO JOBS FOUND" });
        }

        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};
