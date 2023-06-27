import mongoose from "mongoose";
import postSchema from "../schema/post";

const Post = mongoose.model("Post", postSchema);
export default class FeedModel {
    static async savePost(postCreationData) {
        await Post.create(postCreationData);
    }

    static async getPosts() {
        const result = await Post.find().lean().exec();
        return result;
    }
}