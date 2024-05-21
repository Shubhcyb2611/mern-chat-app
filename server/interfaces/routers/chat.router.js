import { Router } from "express";
import { createChat, fetchChats } from "../controllers/chat.controller.js";

const router = Router();

router.route("/").post(createChat).get(fetchChats);

export default router;
