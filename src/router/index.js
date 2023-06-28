import express from "express";
import PostController from "../controller/postController.js";
import UserController from "../controller/userController.js";

const router = express.Router();


/**
 * Routes related to post
*/

router.get("/post", PostController.getAllPosts);
router.post("/post", PostController.savePost);
router.put('/post', PostController.editPost);

/**
 * Routes related to user
*/

router.get("/users", UserController.getUsers);
router.get("/user/:id", UserController.getUser);
router.post("/user", UserController.createUser);
router.put("/user", UserController.updateUser);
router.delete("user/:id", UserController.deleteUser);

export default router;