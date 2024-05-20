import { Router } from "express";
import {
  getAllUsers,
  registerUser,
  updateUsers,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").post(registerUser).get(getAllUsers);
router.route("/:id").patch(updateUsers);
// router.route("/login").post(login);

export default router;
