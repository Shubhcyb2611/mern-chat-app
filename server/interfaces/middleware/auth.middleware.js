import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/env.config.js";
import { User } from "../../domain/user.js";

export const userDeserializer = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return next();
  const payload = jwt.verify(token, JWT_SECRET);
  req.user = await User.findById(payload.userId);
  return next();
};

//next() is used if you want to execute the next lines of code
//return next() simply move you out the callback , and lines after it becomes unreachable
