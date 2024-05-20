import { Router } from "express";
import {
  deleteUsers,
  getAllUsers,
  registerUser,
  updateUsers,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").post(registerUser).get(getAllUsers);
router.route("/:id").patch(updateUsers).delete(deleteUsers);
// router.route("/login").post(login);

export default router;
