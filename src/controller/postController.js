export default class PostController {
    static async savePost(req, res) {

        // const email = req.body.email;
        // const feedback = req.body.feedback;
        // await FeedModel.addMotivation({ email, feedback });
        // res.json({
        //     message: "successfully updated new feed",
        // });
    };

    static async getAllPosts(req, res) {
        res.send("hello");
        // try {
        //     const result = FeedModel.getAllMotivations();
        //     res.send(result);
        //     console.log("Successfully fetched all motivations from database");
        // } catch (error) {
        //     console.log(error);
        // }
    };

    static async editPost(req, res) {
        // try {
        //     const result = FeedModel.getAllMotivations();
        //     res.send(result);
        //     console.log("Successfully fetched all motivations from database");
        // } catch (error) {
        //     console.log(error);
        // }
    };
}