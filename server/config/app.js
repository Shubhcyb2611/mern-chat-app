import express from "express";
import { Logger } from "./logger.js";

export class Server {
  constructor(config) {
    this.config = config;
    this.app = express();

    this.app.use(express.json());
  }

  //   connectDatabase() {
  //     AppDataSource.initialize()
  //       .then(() => {
  //         Logger.info("🤠: Database connection instantiated");
  //         createAdminUser();
  //       })
  //       .catch((e) => {
  //         Logger.error(e);
  //         throw new Error("500::Failed to connect to database");
  //       });
  //   }

  start() {
    const port = this.config.port ?? 1209;
    // this.connectDatabase();
    this.app.listen(port, () => {
      Logger.info(`🚀: Server started on http://localhost:` + port);
      Logger.info(`📝: Serving docs on http://localhost:${port}/api/docs`);
    });
  }
}
