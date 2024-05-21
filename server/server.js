import express from "express";
import { Logger } from "./config/logger.js";
import { connectDatabase } from "./config/db.config.js";
import { appRouter } from "./interfaces/routers/index.js";
import { PORT } from "./config/env.config.js";
import {
  errorHandler,
  notFound,
} from "./interfaces/middleware/errorHandler.js";
import cors from "cors";
import bodyParser from "body-parser";
import { userDeserializer } from "./interfaces/middleware/auth.middleware.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(userDeserializer);
app.use("/api", appRouter);
app.use(notFound);
app.use(errorHandler);
connectDatabase();
app.listen(PORT, () => {
  Logger.info(`🚀: Server started on http://localhost:` + PORT);
  Logger.info(`📝: Serving docs on http://localhost:${PORT}/api/docs`);
});
