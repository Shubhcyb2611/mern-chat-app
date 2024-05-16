// import express from "express";
// import { PORT } from "./config/env.config.js";
// const app = express();
// const port = PORT;

// app.get("/", (req, res) => res.send(`Server is running on ${port}`));

// app.listen(port, () => {
//   console.log(`Server started on port http://localhost:${port}`);
// });
import "reflect-metadata";
import "express-async-errors";

import { Server } from "./config/app.js";
import { PORT } from "./config/env.config.js";
const server = new Server({
  port: PORT,
});

server.start();
