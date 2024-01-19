import { useEffect, useState } from "react";
import { getAllAppointments } from "../api/appointment";
import { AxiosResponse } from "axios";
import { AppointmentForm } from "./AppointmentForm";
import { AllAppointment } from "./AllApointment";
import { DataInteface } from "../types/dataInterface";

export const Form = () => {
  const [appointments, setAppointments] = useState<DataInteface[]>([]);
  const [createAppoinmentSuccess, setCreateAppoinmentSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await getAllAppointments();
        console.log("response: ", response);
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching the appointments:", error);
      }
    };

    fetchData();
  }, [createAppoinmentSuccess]);

  return (
    <div className="flex flex-col gap-12 w-[600px] border-blue-500 ">
      <AppointmentForm
        setCreateAppoinmentSuccess={setCreateAppoinmentSuccess}
        appointments={appointments}
      />
      {appointments.length !== 0 && (
        <AllAppointment
          appointments={appointments}
          setCreateAppoinmentSuccess={setCreateAppoinmentSuccess}
        />
      )}
    </div>
  );
};
