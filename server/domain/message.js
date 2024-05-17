import mongoose from "mongoose";
const messageModel = mongoose.Schema(
  {
    content: { type: String, trim: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  { timestamps: true }
);

export const Message = mongoose.Model(messageModel);
