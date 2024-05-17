import asyncHandler from "express-async-handler";
import { User } from "../../domain/user.js";

export const registerUser = async (req, res) => {
  console.log(req.body);
  const user = await User.create({
    email: "abc@gmail",
    password: "154fh",
    name: "shubhi",
  });
  res.status(200).json(user);
};
