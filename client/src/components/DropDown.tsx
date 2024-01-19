import { TIME_SLOTS } from "../lib/timeSlots";
import { DropDownPropsType } from "../types/propsInterface";

export const DropDown = ({ handleSelect, appointments }: DropDownPropsType) => {
  const removeUnavailSlot = TIME_SLOTS.filter(
    (time) => !appointments.some((value) => value.time === time)
  );

  return (
    <div className="absolute top-20 w-[100%] bg-[#ffffff] shadow-lg border border-[#e1dfdf] max-h-[350px] overflow-y-scroll z-1">
      {removeUnavailSlot.map((value, index) => (
        <div
          key={index}
          className="flex cursor-pointer p-2 hover:bg-[#e1dfdf] justify-between gap-2 items-center"
          onClick={() => handleSelect(value)}
        >
          <span className="flex gap-2 items-center">
            <p className="text-[12px]">{value}</p>
          </span>
        </div>
      ))}
    </div>
  );
};
