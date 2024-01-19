import { appointments } from "../../lib/data";

export const getAllAppointment = (req: Request, res: Response) => {
  // @ts-ignore
  res.json(appointments);
};
