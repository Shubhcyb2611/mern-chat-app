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

export const createGroupChat = async (req, res) => {
  const users = JSON.parse(req.body.users); //FE sends users array in stringify

  if (users.length < 2) {
    return res.status(404).json("More than 2 users are required");
  }

  users.push(req.user); //in order to add the logged in user too

  const groupChat = await Chat.create({
    chatName: req.body.chatName,
    users: users,
    isGroupChat: true,
    groupAdmin: req.user,
  });

  const detailedGroupChat = await Chat.findOne({ _id: groupChat._id })
    .populate("users", "-password -__v -createdAt -updatedAt")
    .populate("groupAdmin", "-password -__v -createdAt -updatedAt");

  res.status(200).json(detailedGroupChat);
};

export const renameGroupChat = async (req, res) => {
  const updatedChat = await Chat.findByIdAndUpdate(
    req.params.id,
    { chatName: req.body.chatName },
    { new: true }
  )
    .populate("users", "-password -__v -createdAt -updatedAt")
    .populate("groupAdmin", "-password -__v -createdAt -updatedAt");

  res.status(200).json(updatedChat);
};

export const deleteGroupChat = async (req, res) => {
  await Chat.findByIdAndDelete(req.params.id);
  res.status(200).end();
};

export const addToGroup = async (req, res) => {
  const added = await Chat.findByIdAndUpdate(
    req.body.id,
    {
      $push: { users: req.body.userId },
    },
    { new: true }
  )
    .populate("users", "-password -__v -createdAt -updatedAt")
    .populate("groupAdmin", "-password -__v -createdAt -updatedAt");

  res.json(added);
};

export const removeToGroup = async (req, res) => {
  const removed = await Chat.findByIdAndUpdate(
    req.body.id,
    {
      $pull: { users: req.body.userId },
    },
    { new: true }
  )
    .populate("users", "-password -__v -createdAt -updatedAt")
    .populate("groupAdmin", "-password -__v -createdAt -updatedAt");

  res.json(removed);
};
