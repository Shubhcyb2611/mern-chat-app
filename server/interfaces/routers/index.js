import { Router } from "express";
import userRouter from "./user.routers.js";

const appRouter = Router();

appRouter.use("/users", userRouter);
