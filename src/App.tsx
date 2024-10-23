import { useState } from "react";
import "./App.css";
import Employee from "./models/employee";
import SecretSantaAssigner from "./secret-santa/secret-santa";
import CsvUploader from "./csv-uploader/csv-uploader";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  return (
    <div className="App">
      <header className="App-header">SECRET SANTA</header>
      <div>
        <CsvUploader onUpload={setEmployees} />
        {employees.length > 0 && <SecretSantaAssigner employees={employees} />}
      </div>
    </div>
  );
}

export default App;
