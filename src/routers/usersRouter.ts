import express from "express";
import { registerUserController } from "../controllers/users/registerUserController";
const router = express.Router();

router.post("/register", registerUserController);

export default router;
