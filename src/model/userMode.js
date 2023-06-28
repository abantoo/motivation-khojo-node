import mongoose from "mongoose";
import userSchema from "../schema/userSchema";

const User = mongoose.model("User", userSchema);
export default class UserModel {
    static async savePost(userData) {
        await Post.create(userData);
    }

    // TODO: handle edit
    static async editPost() {
        const result = await Post.findOne().lean().exec();
        return result;
    }

    // TODO: handle delete
    static async deletePost() {
        const result = await Post.findOne().lean().exec();
        return result;
    }

    static async getPosts() {
        const result = await Post.find().lean().exec();
        return result;
    }
}