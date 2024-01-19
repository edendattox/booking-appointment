import { Request, Response } from "express";
import { appointments } from "../../lib/data";

export const createAppointment = (req: Request, res: Response) => {
  const { time, name } = req.body;

  if (!time || !name) {
    return res.status(400).send("Missing required fields: time and name");
  }

  const newId = appointments.length + 1;

  const existingAppointment = appointments.find(
    (appointment) => appointment.time === time
  );
  if (existingAppointment) {
    return res.status(400).send("An appointment with this ID already exists.");
  }

  const newAppointment = {
    id: newId,
    time,
    name,
  };
  appointments.push(newAppointment);

  res.status(201).json(newAppointment);
};
