import { Router } from "express";

const router = Router();

router.route("/").post(sendMessage);
router.route("/:chatId").get(getAllMessages);

export default router;
