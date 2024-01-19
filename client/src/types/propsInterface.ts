import { DataInteface } from "./dataInterface";

export interface DropDownPropsType {
  handleSelect: (value: string) => void;
  appointments: DataInteface[];
}

export interface FormPropsType {
  setCreateAppoinmentSuccess: (value: boolean) => void;
  appointments: DataInteface[];
}

export interface AllAppointmentPropsType {
  setCreateAppoinmentSuccess: (value: boolean) => void;
  appointments: DataInteface[];
}
