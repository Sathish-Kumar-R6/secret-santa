import { useState } from "react";
import "./App.css";
import Employee from "./models/employee";
import SecretSantaAssigner from "./secret-santa/secret-santa";
import CsvUploader from "./csv-uploader/csv-uploader";
import LastYearSantaCsv from "./csv-uploader/last-year-santa-csv";
import { SecretGiversInterface } from "./models/model.types";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [prevEmployees, setPrevEmployees] = useState<SecretGiversInterface[]>(
    [],
  );

  return (
    <main className="App">
      <header className="App-header">SECRET SANTA</header>
      <div>
        <CsvUploader onUpload={setEmployees} />
        {employees.length > 0 && (
          <SecretSantaAssigner
            employees={employees}
            prevEmployees={prevEmployees}
          />
        )}
        <LastYearSantaCsv onUpload={setPrevEmployees} />
      </div>
    </main>
  );
}

export default App;
