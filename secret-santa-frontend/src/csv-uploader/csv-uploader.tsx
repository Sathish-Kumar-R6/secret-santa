import React from "react";
import Employee from "../models/employee";
import * as XLSX from "xlsx";
import { EmployeeRow } from "./csv-uploader.types";
import Upload from "../ui/upload/upload";

type CsvUPloaderProps = {
  onUpload: (employees: Employee[]) => void;
};

function CsvUploader({ onUpload }: CsvUPloaderProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json<EmployeeRow>(sheet);

        // Convert the parsed data into Employee objects
        const employees = json.map(
          (row) => new Employee(row.Employee_Name, row.Employee_EmailID),
        );
        onUpload(employees);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  return (
    <div>
      <h3>Upload Employee Excel or CSV File</h3>
      <Upload accept=".xlsx,.xls,.csv,.ods" handleChange={handleFileUpload} />
    </div>
  );
}

export default CsvUploader;
