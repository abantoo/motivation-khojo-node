import express from "express";
import postController from "../controller/postController";

const router = express.Router();

router.get("/", postController.getAllMotivations);

router.post("/", postController.addMotivation);

module.exports = router;