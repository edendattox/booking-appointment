import express from "express";

import { getAllAppointment } from "../../controllers/appointement/get_all_appointment";
import { getAppointment } from "../../controllers/appointement/get_appointment";
import { createAppointment } from "../../controllers/appointement/create_appointment";
import { deleteAppointment } from "../../controllers/appointement/delete_appointment";

const appointmentRouter = express.Router();

// create appointment
appointmentRouter.post("/create", createAppointment);

// get assignment by id
appointmentRouter.get("/get/:id", getAppointment);

// get all appointments
// @ts-ignore
appointmentRouter.get("/get-all", getAllAppointment);

// delete appointment
appointmentRouter.delete("/delete/:id", deleteAppointment);

export { appointmentRouter };
