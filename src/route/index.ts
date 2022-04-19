import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware";

import UserController from "../controller/UserController";
import AuthController from "../controller/AuthController";

const router = Router();

router.post("/users", UserController.store);
router.post("/auth", AuthController.authenticate);
router.get("/users", authMiddleware, UserController.index);

export default router;
