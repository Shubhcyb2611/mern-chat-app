import "reflect-metadata";
import "express-async-errors";

import { Server } from "./config/app.js";
import { PORT } from "./config/env.config.js";
const server = new Server({
  port: PORT,
});

server.start();
