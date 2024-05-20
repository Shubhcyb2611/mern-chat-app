import asyncHandler from "express-async-handler";
import { User } from "../../domain/user.js";
import { generateToken } from "../../config/jwt.config.js";

export const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json(user);
};

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

export const updateUsers = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(202).json(user);
});

export const deleteUsers = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(204).json(user);
});

export const loginUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && user.matchPassword(req.body.password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
      token: generateToken(user._id),
    });
  }
});
