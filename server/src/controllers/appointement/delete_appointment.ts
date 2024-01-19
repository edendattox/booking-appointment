import { Request, Response } from "express";
import { appointments } from "../../lib/data";

export const deleteAppointment = (req: Request, res: Response) => {
  const appointmentIndex = appointments.findIndex(
    (a) => a.id === parseInt(req.params.id)
  );
  if (appointmentIndex < 0) {
    return res.status(404).send("Appointment not found");
  }
  const deletedAppointment = appointments.splice(appointmentIndex, 1);
  res.json(deletedAppointment);
};
