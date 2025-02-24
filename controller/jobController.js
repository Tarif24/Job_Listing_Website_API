import Job, { JobContainer } from "../model/jobModel.js";

export const create = async (req, res) => {
    try {
        let jobCon = await JobContainer.findOne();

        if (!jobCon) {
            jobCon = new JobContainer();
            await jobCon.save();
        }

        const jobData = new Job(req.body);

        // If needed add duplicate job detection functionality here

        const updatedJobCon = await JobContainer.findOneAndUpdate(
            jobCon,
            { $push: { Jobs: jobData } },
            { new: true }
        );

        jobData.save();

        res.status(200).json(updatedJobCon);
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};

export const getAllJobs = async (req, res) => {
    try {
        const jobCon = await JobContainer.findOne();

        if (jobCon.Jobs.length === 0) {
            return res.status(404).json({ message: "NO JOBS FOUND" });
        }

        res.status(200).json(jobCon.Jobs);
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};

export const getJob = async (req, res) => {
    try {
        const id = req.params.id;
        const jobExist = await Job.findOne({ _id: id });

        if (!jobExist) {
            return res.status(404).json({
                message: "CANNOT GET A JOB THAT DOES NOT EXIST",
            });
        }

        res.status(201).json(jobExist);
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const jobExist = await Job.findOne({ _id: id });
        const jobCon = await JobContainer.findOne();

        const posResult = await JobContainer.aggregate([
            {
                $project: {
                    index: { $indexOfArray: ["$Jobs", [jobExist._id]] },
                },
            },
        ]);

        const pos = posResult.length > 0 ? posResult[0].index : -1;

        if (!jobExist) {
            return res.status(404).json({
                message: "CANNOT UPDATE A JOB THAT DOES NOT EXIST",
            });
        }

        const updateJob = await Job.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        await JobContainer.findOneAndUpdate(
            { _id: jobCon._id },
            { $pull: { Jobs: { _id: jobExist._id } } },
            { new: true }
        );

        await JobContainer.findOneAndUpdate(
            { _id: jobCon._id },
            {
                $push: {
                    Jobs: {
                        $each: [updateJob],
                        $position: pos,
                    },
                },
            },
            { new: true }
        );

        res.status(201).json(updateJob);
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};

export const deleteJob = async (req, res) => {
    try {
        const id = req.params.id;
        const jobCon = await JobContainer.findOne();
        const job = await Job.findOne({ _id: id });

        await JobContainer.findOneAndUpdate(
            { _id: jobCon._id },
            { $pull: { Jobs: { _id: job._id } } },
            { new: true }
        );

        const jobExist = await Job.findOne({ _id: id });

        if (!jobExist) {
            return res.status(404).json({
                message: "CANNOT DELETE A JOB THAT DOES NOT EXIST",
            });
        }

        await Job.findByIdAndDelete(id);

        res.status(201).json({
            message: `JOB WITH _ID ${id} HAS BEEN DELETED`,
        });
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};
