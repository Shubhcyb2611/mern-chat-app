import { Router } from "express";
import userRouter from "./user.routers.js";
import chatRouter from "./chat.router.js";
import messageRouter from "./message.router.js";

const appRouter = Router();

appRouter.use("/users", userRouter);
appRouter.use("/chats", chatRouter);
appRouter.use("/messages", messageRouter);

export { appRouter };
