import { useState } from "react";
import ResultTable from "../results/result-table";
import DownloadSecretSanta from "./download-secret-santa";
import AssignSecretSanta from "./assign-secret-santa";
import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";

type SecretSantaAssignerProps = {
  employeeFile?: File;
  prevEmployeeFile?: File;
};
const SecretSantaAssigner = ({
  employeeFile,
  prevEmployeeFile,
}: SecretSantaAssignerProps) => {
  const [assignments, setAssigments] = useState<SecretSheetInterface[]>([]);
  const handleSetAssignments = (data: SecretSheetInterface[]) => {
    setAssigments(data);
  };

  return (
    <div>
      <AssignSecretSanta
        employees={employeeFile}
        prevEmployees={prevEmployeeFile}
        handleSetAssignments={handleSetAssignments}
      />
      <DownloadSecretSanta assignments={assignments} />
      {assignments && (
        <div>
          <ResultTable assignments={assignments} />
        </div>
      )}
    </div>
  );
};

export default SecretSantaAssigner;
