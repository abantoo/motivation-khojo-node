import UserModel from "../model/userModel";

export default class UserController {
    static async createUser(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;

        const user = await UserModel.createUser({ email, username, password });

        if (!user) {
            res.json({
                message: "error while creating user"
            });

            return;
        }

        res.json({
            message: `successfully created user ${user}`,
        });
    };

    static async updateUser(req, res) {
        const payload = req.body;

        const updatedUser = await UserModel.updateUser(payload);

        if (!updatedUser) {
            res.json({
                message: "error while updating user"
            });
            return;
        }

        res.json({
            message: `successfully updated user ${updatedUser}`,
        });
    };

    static async getUsers(req, res) {
        const users = await UserModel.getUsers();
        if (!users) {
            console.log('No users');
        }

        res.json({ users });
    };

    static async getUser(req, res) {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    static async deleteUser(req, res) {
        try {

        } catch (error) {
            console.error(error);
        }
    }
}