import express from "express";
import { registerUserController } from "../controllers/users/registerUserController";
import { loginUserController } from "../controllers/users/loginUserController";
const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);

export default router;
