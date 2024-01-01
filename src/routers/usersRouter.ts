import express from "express";
import { registerUserController } from "../controllers/users/registerUserController";
import { loginUserController } from "../controllers/users/loginUserController";
import { keepLoginController } from "../controllers/users/keepLoginController";
import { verifyToken } from "../middleware/jwtVerifyToken";
import { getIdUserController } from "../controllers/users/getIdUser";
const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/keepLogin", verifyToken, keepLoginController);
router.get("/:id", getIdUserController);

export default router;
