import { Router } from "express";
import { createChat } from "../controllers/chat.controller.js";

const router = Router();

router.route("/").post(createChat);

export default router;
