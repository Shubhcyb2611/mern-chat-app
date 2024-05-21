import { Router } from "express";
import {
  createChat,
  createGroupChat,
  deleteGroupChat,
  fetchChats,
  renameGroupChat,
} from "../controllers/chat.controller.js";

const router = Router();

router.route("/").post(createChat).get(fetchChats);
router.route("/group").post(createGroupChat);
router.route("/group/:id").patch(renameGroupChat).delete(deleteGroupChat);

export default router;
