import express from "express";
import { Logger } from "./logger.js";
import { connectDatabase } from "./db.config.js";

export class Server {
  constructor(config) {
    this.config = config;
    this.app = express();
    this.app.use("/api", appRouter);

    this.app.use(express.json());
  }

  start() {
    const port = this.config.port ?? 1209;
    connectDatabase();
    this.app.listen(port, () => {
      Logger.info(`🚀: Server started on http://localhost:` + port);
      Logger.info(`📝: Serving docs on http://localhost:${port}/api/docs`);
    });
  }
}
