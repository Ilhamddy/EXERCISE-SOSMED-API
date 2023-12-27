import express from "express";
import { registerUserController } from "../controllers/users/registerUserController";
import { loginUserController } from "../controllers/users/loginUserController";
import { keepLoginController } from "../controllers/users/keepLoginController";
import { verifyToken } from "../middleware/jwtVerifyToken";
const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/keepLogin", verifyToken, keepLoginController);

export default router;
