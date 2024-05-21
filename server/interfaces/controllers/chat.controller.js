import asyncHandler from "express-async-handler";
import { User } from "../../domain/user.js";
import { generateToken } from "../../config/jwt.config.js";
import { Chat } from "../../domain/chat.js";

export const createChat = async (req, res) => {
  const { userId, chatName } = req.body;
  if (!userId) throw new Error("UserId is not sent");

  const chat = await Chat.create({
    chatName: chatName,
    isGroupChat: false,
    users: [req.user._id, userId],
  });
  res.json(chat);
};
