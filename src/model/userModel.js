import mongoose from "mongoose";
import userSchema from "../schema/userSchema.js";

const User = mongoose.model("User", userSchema);
export default class UserModel {
    static async createUser(userCreationData) {
        await User.create(userCreationData);
    }

    // TODO: handle edit
    static async updateUser(userId, userUpdateData) {

        const filter = { _id: userUpdateData }
        const update = userUpdateData;
        const result = await User.findOneAndUpdate(filter, update).lean().exec();
        return result;
    }

    // TODO: handle delete
    static async deleteUser(userId) {
        const filter = { _id: userId };
        const result = await User.deleteOne(filter).lean().exec();
        return result;
    }

    static async getUser(userId) {
        const filter = { _id: userId };
        const result = await User.findOne(filter).lean().exec();
        return result;
    }

    static async getUsers() {
        const result = await User.find().lean().exec();
        return result;
    }
}