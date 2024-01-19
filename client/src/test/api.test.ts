import axios from "axios";

test("appointments are returned as json", async () => {
  const response = await axios.get(
    "http://localhost:4000/api/v1/appointments/get-all"
  );
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toEqual(
    expect.stringContaining("json")
  );
});
