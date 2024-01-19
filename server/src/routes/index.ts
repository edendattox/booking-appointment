import express from "express";
import { appointmentRouter } from "./appoinments";

const router = express.Router();

router.use("/appointment", appointmentRouter);

export { router };
