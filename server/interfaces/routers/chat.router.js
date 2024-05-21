import { Router } from "express";
import {
  createChat,
  createGroupChat,
  fetchChats,
} from "../controllers/chat.controller.js";

const router = Router();

router.route("/").post(createChat).get(fetchChats);
router.route("/group").post(createGroupChat);

export default router;
