import { Request, Response } from "express";
import { appointments } from "../../lib/data";

export const getAssignment = (req: Request, res: Response) => {
  const appointment = appointments.find(
    (a) => a.id === parseInt(req.params.id)
  );
  if (!appointment) {
    return res.status(404).send("Appointment not found");
  }

  res.json(appointment);
};
