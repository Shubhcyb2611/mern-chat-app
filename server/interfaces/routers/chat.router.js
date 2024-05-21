import { Router } from "express";
import {
  addToGroup,
  createChat,
  createGroupChat,
  deleteGroupChat,
  fetchChats,
  removeToGroup,
  renameGroupChat,
} from "../controllers/chat.controller.js";

const router = Router();

router.route("/").post(createChat).get(fetchChats);
router.route("/group").post(createGroupChat);
router.route("/group/:id").patch(renameGroupChat).delete(deleteGroupChat);
router.route("/group-add").patch(addToGroup);
router.route("/group-remove").patch(removeToGroup);

export default router;
