import React, { useState } from "react";
import { DropDown } from "./DropDown";
import { createAppointment } from "../api/appointment";
import { FormPropsType } from "../types/propsInterface";

export const AppointmentForm = ({
  setCreateAppoinmentSuccess,
  appointments,
}: FormPropsType) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [openDown, setOpenDown] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    setSelectedTimeSlot(value);
    setOpenDown(false);
  };

  const handleSubmit = async () => {
    if (name.length <= 2) {
      setError("Name cannot be less than 3 characters");
      return;
    }
    if (!selectedTimeSlot) {
      setError("Please select a time slot");
      return;
    }

    const data = {
      name,
      time: selectedTimeSlot,
    };

    try {
      setCreateAppoinmentSuccess(false);
      await createAppointment(data);
      setError("");
      setName("");
      setSelectedTimeSlot("");
      setCreateAppoinmentSuccess(true);
    } catch (error) {
      console.error("Error creating appointment:", error);
      setError("An appointment with this ID already exists.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="flex flex-col gap-[4px]">
          <label htmlFor="name" className="text-[12px]">
            Full name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Full name"
            className="flex-1 outline-none w-[100%] border border-[#dddddd] px-[10px] py-[12px] rounded-sm"
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span className="relative flex flex-col gap-[4px]">
          <label htmlFor="name" className="text-[12px]">
            Select time a slot
          </label>
          <span
            className="flex cursor-pointer border border-[#dddddd] px-[10px] py-[12px] rounded-sm"
            onClick={() => setOpenDown((prev) => !prev)}
          >
            <p>{!selectedTimeSlot ? "Select time slot" : selectedTimeSlot}</p>
            <span></span>
          </span>
          {openDown && (
            <DropDown handleSelect={handleSelect} appointments={appointments} />
          )}
        </span>
        {error && <p className="text-red-500 text-[12px]">{error}</p>}
      </div>
      <button
        type="submit"
        className={`flex align-center justify-center text-white py-2 rounded-sm ${
          !name ? "bg-blue-300" : " bg-blue-500"
        }`}
        onClick={handleSubmit}
        disabled={!name}
      >
        Submit
      </button>
    </>
  );
};
