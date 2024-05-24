import { Chat } from "../../domain/chat.js";
import { Message } from "../../domain/message.js";
import { User } from "../../domain/user.js";

export const sendMessage = async (req, res) => {
  let message = await Message.create({
    content: req.body.content,
    sender: req.user._id,
    chat: req.body.chatId,
  });
  message = await message.populate("sender", "name profilePic");
  message = await message.populate("chat");
  message = await User.populate(message, {
    path: "chat.users",
    select: "name pic ",
  });
  await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
  res.status(200).json(message);
};

export const getAllMessages = async (req, res) => {
  const messages = await Message.find({ chat: req.params.chatId })
    .populate("sender", "name pic email")
    .populate("chat");
  res.json(messages);
};
