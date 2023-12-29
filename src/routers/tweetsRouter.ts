import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetController";



const router = express.Router();
//router
router.post("/", createTweetController);


export default router;
