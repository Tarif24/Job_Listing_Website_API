import mongoose from "mongoose";

const jobContainer = new mongoose.Schema({
    name: {
        type: String,
        default: "Job Container",
    },
    Jobs: {
        type: [],
        default: [],
    },
});

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    company: {
        type: Object,
        required: true,
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        contactEmail: {
            type: String,
            required: true,
        },
        contactPhone: {
            type: String,
            required: true,
        },
    },
});

const JobContainer = mongoose.model("jobContainer", jobContainer);

export default mongoose.model("job", jobSchema);
export { JobContainer };
