import express from "express";
import { Logger } from "./config/logger.js";
import { connectDatabase } from "./config/db.config.js";
import { appRouter } from "./interfaces/routers/index.js";
import { PORT } from "./config/env.config.js";

const app = express();
app.use(express.json());
app.use("/api", appRouter);
connectDatabase();
app.listen(PORT, () => {
  Logger.info(`🚀: Server started on http://localhost:` + PORT);
  Logger.info(`📝: Serving docs on http://localhost:${PORT}/api/docs`);
});
