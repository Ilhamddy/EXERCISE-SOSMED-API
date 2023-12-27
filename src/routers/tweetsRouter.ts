import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetController";
import { getTweetsController } from "../controllers/tweets/getTweetsController";

const router = express.Router();

router.post("/", createTweetController);
router.get("/", getTweetsController);

export default router;
