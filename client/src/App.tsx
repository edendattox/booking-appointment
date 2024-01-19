import { Form } from "./components/Appointment";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-[36px]">Schedule an Appointment</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
