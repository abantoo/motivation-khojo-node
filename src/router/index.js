import express from "express";
import PostController from "../controller/postController.js";

const router = express.Router();

router.get("/", PostController.getAllPosts);

router.post("/", PostController.savePost);

router.put('/', PostController.editPost);

export default router;