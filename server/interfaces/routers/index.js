import { Router } from "express";
import userRouter from "./user.routers.js";
import chatRouter from "./chat.router.js";

const appRouter = Router();

appRouter.use("/users", userRouter);
appRouter.use("/chats", chatRouter);

export { appRouter };
