import { deleteAppointment } from "../api/appointment";
import { AllAppointmentPropsType } from "../types/propsInterface";

export const AllAppointment = ({
  appointments,
  setCreateAppoinmentSuccess,
}: AllAppointmentPropsType) => {
  const handleDelete = async (id: number) => {
    try {
      setCreateAppoinmentSuccess(false);
      await deleteAppointment(id);
      setCreateAppoinmentSuccess(true);
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-[24px]">Appointments</h1>
      <div className="flex flex-col gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex gap-2 border border-[#dddddd] p-4 justify-between"
          >
            <div className="flex flex-col ">
              <span className="flex gap-4">
                <p className="text-[12px]">Name:</p>
                <p className="text-[12px]">{appointment.name}</p>
              </span>
              <span className="flex gap-4">
                <p className="text-[12px]">Time:</p>
                <p className="text-[12px]">{appointment.time}</p>
              </span>
            </div>
            <span
              className="text-8 text-blue-400 cursor-pointer"
              onClick={() => handleDelete(appointment.id)}
            >
              Delete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
