import asyncHandler from "express-async-handler";
import { User } from "../../domain/user.js";
import { generateToken } from "../../config/jwt.config.js";
import { Chat } from "../../domain/chat.js";

export const createChat = async (req, res) => {
  const { userId, chatName } = req.body;
  if (!userId) throw new Error("UserId is not sent");

  let existingChat = await Chat.find({
    isGroupChat: false,
    $and: [
      {
        users: { $elemMatch: { $eq: req.user._id } },
        users: { $elemMatch: { $eq: userId } },
      },
    ],
  })
    .populate("users", "-password -__v -createdAt -updatedAt ")
    .populate("latestMessage");

  existingChat = await User.populate(existingChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (existingChat.length > 0) {
    res.status(200).json(existingChat[0]);
  } else {
    const chat = await Chat.create({
      chatName: chatName,
      isGroupChat: false,
      users: [req.user._id, userId],
    });
    const detailedChat = await Chat.findOne({ _id: chat._id }).populate(
      "users",
      "-password -__v -createdAt -updatedAt "
    );
    res.json(detailedChat);
  }
};

export const fetchChats = async (req, res) => {
  const chat = await Chat.find({
    users: { $elemMatch: { $eq: req.user._id } },
  })
    .populate("users", "-password -__v -createdAt -updatedAt")
    .populate("groupAdmin", "-password -__v -createdAt -updatedAt")
    .populate("latestMessage")
    .sort({ updated: -1 })
    .then(async (results) => {
      results = await User.populate(results, {
        path: "latestMessage.sender",
        select: "name profilePic email",
      });
      res.status(200).json(results);
    });
};
