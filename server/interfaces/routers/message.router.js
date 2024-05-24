import { Router } from "express";
import {
  sendMessage,
  getAllMessages,
} from "../controllers/message.controller.js";

const router = Router();

router.route("/").post(sendMessage);
router.route("/:chatId").get(getAllMessages);

export default router;
