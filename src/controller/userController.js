export default class UserController {
    static async createUser(req, res) {

        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;

        const user = await UserModel.saveUser({ email, feedback });

        if (user) {
            res.json({
                message: `successfully created user ${user}`,
            });
        }
    };

    static async updateUser(req, res) {
        res.send("hello");
        // try {
        //     const result = FeedModel.getAllMotivations();
        //     res.send(result);
        //     console.log("Successfully fetched all motivations from database");
        // } catch (error) {
        //     console.log(error);
        // }
    };

    static async getAllUsers(req, res) {
        // try {
        //     const result = FeedModel.getAllMotivations();
        //     res.send(result);
        //     console.log("Successfully fetched all motivations from database");
        // } catch (error) {
        //     console.log(error);
        // }
    };
}