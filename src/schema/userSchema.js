import mongoose from "mongoose";

export default postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    status: {
        type: String,
    },
    perks: {
        type: [String],
    },
    showNSFW: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});
