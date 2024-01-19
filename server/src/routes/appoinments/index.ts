import express from "express";

import { getAllAssignments } from "../../controllers/appointement/get_all_appointment";
import { getAssignment } from "../../controllers/appointement/get_appointment";
import { createAssignment } from "../../controllers/appointement/create_appointment";
import { deleteAssignment } from "../../controllers/appointement/delete_appointment";

const appointmentRouter = express.Router();

// create appointment
appointmentRouter.post("/create", createAssignment);

// get assignment by id
appointmentRouter.get("/get/:id", getAssignment);

// get all appointments
// @ts-ignore
appointmentRouter.get("/get-all", getAllAssignments);

// delete appointment
appointmentRouter.delete("/delete/:id", deleteAssignment);

export { appointmentRouter };
