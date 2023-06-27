import mongoose from "mongoose";

export default postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
}, {
    timestamps: true
});
