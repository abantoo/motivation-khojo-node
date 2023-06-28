import mongoose from "mongoose";
import userSchema from "../schema/userSchema";

const User = mongoose.model("User", userSchema);
export default class UserModel {
    static async createUser(userCreationData) {
        await User.create(userCreationData);
    }

    // TODO: handle edit
    static async updateUser(userUpdateData) {
        const result = await User.findOne().lean().exec();
        return result;
    }

    // TODO: handle delete
    static async deleteUser(userId) {
        const result = await User.findOne().lean().exec();
        return result;
    }

    static async getUser(userParam) {
        const result = await User.findOne().lean().exec();
        return result;
    }

    static async getUsers() {
        const result = await User.find().lean().exec();
        return result;
    }
}