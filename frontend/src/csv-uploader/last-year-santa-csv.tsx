import Upload from "../ui/upload/upload";
import { SecretSheetInterface } from "./csv-uploader.types";
import * as XLSX from "xlsx";
import { SecretGiversInterface } from "../models/model.types";

type LastYearSantaCsvProps = {
  onUpload: (employees: SecretGiversInterface[]) => void;
};

function LastYearSantaCsv({ onUpload }: LastYearSantaCsvProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json<SecretSheetInterface>(sheet);

        // Convert the parsed data into Employee objects
        const prevEmployees: SecretGiversInterface[] = json.map((row) => {
          return {
            employee_name: row.Employee_Name,
            employee_email: row.Employee_EmailID,
            secret_emp_name: row.Secret_Child_Name,
            secret_emp_email: row.Secret_Child_EmailID,
          };
        });
        onUpload(prevEmployees);
        console.log("employees value", prevEmployees);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <Upload accept=".xlsx,.xls,.csv,.ods" handleChange={handleFileUpload} />
  );
}

export default LastYearSantaCsv;
