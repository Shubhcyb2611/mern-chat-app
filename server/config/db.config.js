import mongoose from "mongoose";
import { MONGO_URI } from "./env.config.js";
import { Logger } from "./logger.js";

export const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    Logger.info(`📝: MongoDB connected:${connect.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit();
  }
};
