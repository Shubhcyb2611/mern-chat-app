import { Chat } from "../../domain/chat";
import { Message } from "../../domain/message.js";

export const sendMessage = async (req, res) => {
  let message = await Message.create({
    content: req.body.content,
    sender: req.user._id,
    chat: req.body.chatId,
  });
  message = await message.populate("sender", "name profilePic").execPopulate();
  message = await message.populate("chat").execPopulate();
  message = await User.populate(message, {
    path: "chat.users",
    select: "name pic ",
  });
  await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
  res.status(200).json(message);
};
