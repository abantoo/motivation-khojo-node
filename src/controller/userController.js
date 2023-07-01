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
        // try {
        //     const result = FeedModel.getAllMotivations();
        //     res.send(result);
        //     console.log("Successfully fetched all motivations from database");
        // } catch (error) {
        //     console.log(error);
        // }
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