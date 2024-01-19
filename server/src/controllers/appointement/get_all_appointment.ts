import { appointments } from "../../lib/data";

export const getAllAssignments = (req: Request, res: Response) => {
  // @ts-ignore
  res.json(appointments);
};
