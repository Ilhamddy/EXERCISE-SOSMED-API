import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetController";
import { getTweetsController } from "../controllers/tweets/getTweetsController";
import { deleteTweetController } from "../controllers/tweets/deleteTweetController";

const router = express.Router();

router.post("/", createTweetController);
router.get("/", getTweetsController);
router.delete("/:id", deleteTweetController);

export default router;
