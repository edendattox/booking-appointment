import { createAppointment } from "../controllers/appointement/create_appointment";
import { appointments } from "../lib/data";

describe("createAppointment", () => {
  const mockSend = jest.fn();
  const mockJson = jest.fn();
  const mockStatus = jest.fn().mockImplementation((statusCode) => {
    return { send: mockSend, json: mockJson, status: mockStatus };
  });

  const mockRes = {
    status: mockStatus,
    send: mockSend,
    json: mockJson,
  };

  beforeEach(() => {
    mockSend.mockClear();
    mockJson.mockClear();
    mockStatus.mockClear();
    appointments.length = 0;
  });

  test("should create a new appointment successfully", () => {
    const mockReq = {
      body: { time: "10:00", name: "John Doe" },
    };

    // @ts-ignore
    createAppointment(mockReq, mockRes);

    expect(appointments).toHaveLength(1);
    expect(appointments[0].time).toBe("10:00");
    expect(appointments[0].name).toBe("John Doe");
    expect(mockStatus).toHaveBeenCalledWith(201);
  });

  test("should return 400 if time or name is missing", () => {
    const mockReq = {
      body: { name: "John Doe" },
    };

    // @ts-ignore
    createAppointment(mockReq, mockRes);

    expect(mockStatus).toHaveBeenCalledWith(400);
    expect(mockSend).toHaveBeenCalledWith(
      "Missing required fields: time and name"
    );
  });

  test("should prevent creating an appointment with a duplicate time", () => {
    appointments.push({ id: 1, time: "10:00", name: "John Doe" });

    const mockReq = {
      body: { time: "10:00", name: "Jane Doe" },
    };

    // @ts-ignore
    createAppointment(mockReq, mockRes);

    expect(mockStatus).toHaveBeenCalledWith(400);
    expect(mockSend).toHaveBeenCalledWith(
      "An appointment with this ID already exists."
    );
  });
});
