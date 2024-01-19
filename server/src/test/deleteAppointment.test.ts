import { deleteAppointment } from "../controllers/appointement/delete_appointment";
import { appointments } from "../lib/data";

describe("deleteAppointment", () => {
  const mockSend = jest.fn();
  const mockJson = jest.fn();
  const mockStatus = jest
    .fn()
    .mockReturnValue({ send: mockSend, json: mockJson });
  const mockRes = { status: mockStatus, send: mockSend, json: mockJson };

  beforeEach(() => {
    mockSend.mockClear();
    mockJson.mockClear();
    mockStatus.mockClear();
    appointments.length = 0;
  });

  test("should delete an appointment successfully", () => {
    appointments.push({ id: 1, time: "10:00", name: "John Doe" });

    const mockReq = {
      params: { id: "1" },
    };

    // @ts-ignore
    deleteAppointment(mockReq, mockRes);

    expect(appointments).toHaveLength(0);
    expect(mockJson).toHaveBeenCalledWith([
      { id: 1, time: "10:00", name: "John Doe" },
    ]);
  });

  test("should return 404 if appointment not found", () => {
    const mockReq = {
      params: { id: "999" },
    };

    // @ts-ignore
    deleteAppointment(mockReq, mockRes);

    expect(mockStatus).toHaveBeenCalledWith(404);
    expect(mockSend).toHaveBeenCalledWith("Appointment not found");
  });
});
