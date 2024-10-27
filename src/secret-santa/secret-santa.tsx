import { useState } from "react";
import Employee from "../models/employee";
import ResultTable from "../results/result-table";
import { SecretGiversInterface } from "../models/model.types";
import DownloadSecretSanta from "./download-secret-santa";
import AssignSecretSanta from "./assign-secret-santa";

type SecretSantaAssignerProps = {
  employees: Employee[];
  prevEmployees: SecretGiversInterface[];
};
const SecretSantaAssigner = ({
  employees,
  prevEmployees,
}: SecretSantaAssignerProps) => {
  const [assignments, setAssignments] = useState<Map<
    Employee,
    Employee
  > | null>(null);

  const handleSetAssignments = (emp: Map<Employee, Employee>) => {
    setAssignments(emp);
  };

  return (
    <div>
      <AssignSecretSanta
        employees={employees}
        prevEmployees={prevEmployees}
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
