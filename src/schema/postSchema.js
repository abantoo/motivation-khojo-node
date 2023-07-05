import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
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
    user: {
        type: String,
        ref: 'User'
    }
}, {
    timestamps: true
});

export default postSchema;
