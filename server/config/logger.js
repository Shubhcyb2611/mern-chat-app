import pino from "pino";
import { ENV } from "./env.config.js";
import pinoPretty from "pino-pretty";

const prettyStream = pinoPretty();

const streams = [{ stream: prettyStream }];

export const Logger = pino(
  {
    level: ENV === "PROD" ? "error" : "info",
  },
  pino.multistream(streams)
);
