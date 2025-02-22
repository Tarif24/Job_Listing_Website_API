import Job from "../model/jobModel.js";

export const fetch = async (req, res) => {
    try {
        return res.json("Hello World");
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
};
