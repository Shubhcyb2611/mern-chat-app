import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./env.config.js";

export const generateToken = (userId) => {
  const token = jwt.sign({ userId: userId }, JWT_SECRET, { expiresIn: "10d" });
  return token;
};
