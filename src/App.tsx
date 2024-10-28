import { useState } from "react";
import "./App.css";
import CsvUploader from "./csv-uploader/csv-uploader";
import LastYearSantaCsv from "./csv-uploader/last-year-santa-csv";
import SecretSantaAssigner from "./secret-santa/secret-santa";

function App() {
  const [employeeFile, setEmployeeFile] = useState<File>();
  const [prevEmployeeFile, setPrevEmployeesFile] = useState<File>();

  return (
    <main className="App">
      <header className="App-header">AMCE&apos;s SECRET SANTA</header>
      <div>
        <CsvUploader onUpload={setEmployeeFile} />
        <LastYearSantaCsv onUpload={setPrevEmployeesFile} />
        <SecretSantaAssigner
          employeeFile={employeeFile}
          prevEmployeeFile={prevEmployeeFile}
        />
      </div>
    </main>
  );
}

export default App;
