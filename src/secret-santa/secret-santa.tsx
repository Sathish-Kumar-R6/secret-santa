import { useState } from "react";
import Employee from "../models/employee";
import SecretSantaGame from "../models/secret-santa";
import { saveAs } from "file-saver";
import ResultTable from "../results/result-table";

type SecretSantaAssignerProps = {
  employees: Employee[];
  prevEmployees?: Map<string, Employee>;
};
const SecretSantaAssigner = ({
  employees,
  prevEmployees,
}: SecretSantaAssignerProps) => {
  const [assignments, setAssignments] = useState<Map<
    Employee,
    Employee
  > | null>(null);

  const handleAssign = () => {
    try {
      const previousAssignments = prevEmployees
        ? prevEmployees
        : new Map<string, Employee>(); // Replace with actual logic to load previous assignments
      const game = new SecretSantaGame(employees, previousAssignments);
      const result = game.assignSecretChildren();
      setAssignments(result);
    } catch (error) {
      const typedError = error as Error;
      alert(typedError.message);
    }
  };

  const handleDownload = () => {
    if (assignments) {
      const csvContent =
        "data:text/csv;charset=utf-8," +
        Array.from(assignments.entries())
          .map(
            ([giver, receiver]) =>
              `${giver.name},${giver.email},${receiver.name},${receiver.email}`,
          )
          .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "secret_santa_assignments.csv");
    }
  };

  return (
    <div>
      <button onClick={handleAssign}>Assign Secret Children</button>
      {assignments && (
        <div>
          <ResultTable assignments={assignments} />
          <button onClick={handleDownload}>Download CSV</button>
        </div>
      )}
    </div>
  );
};

export default SecretSantaAssigner;
