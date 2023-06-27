import mongoose from "mongoose";
import postSchema from "../schema/post";

const Post = mongoose.model("Post", postSchema);
export default class FeedModel {
    static async savePost(postCreationData) {
        await Post.create(postCreationData);
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