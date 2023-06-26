import express from "express";
import postController from "../controller/postController";

const router = express.Router();

router.get("/", postController.getAllPosts);

router.post("/", postController.savePost);

router.put('/', postController.editPost);

module.exports = router;