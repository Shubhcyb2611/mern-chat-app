import { Router } from "express";
import { getAllUsers, registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/").post(registerUser).get(getAllUsers);
// router.route("/login").post(login);

export default router;
