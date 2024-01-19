import { DataInteface } from "../types/dataInterface";
import { Axios } from "./axios";

const APPOINTMENT_PATH = "/appointment";

export const getAllAppointments = () => {
  return Axios().get(`${APPOINTMENT_PATH}/get-all`);
};

export const deleteAppointment = (id: number) => {
  return Axios().delete(`${APPOINTMENT_PATH}/delete/${id}`);
};

export const createAppointment = (data: { name: string; time: string }) => {
  return Axios().post(`${APPOINTMENT_PATH}/create`, data);
};
