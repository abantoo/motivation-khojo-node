import express from "express";
// import postController from "../controller/postController";
import PostController from "../controller/postController.js";

const router = express.Router();

router.get("/", PostController.getAllPosts);

router.post("/", PostController.savePost);

router.put('/', PostController.editPost);

module.exports = router;