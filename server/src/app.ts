import cors from "cors";
import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Routers
 */
app.use("/api/v1", router);

/**
 *  Custom Middlewares
 */
app.use(errorHandler);

export { app };
