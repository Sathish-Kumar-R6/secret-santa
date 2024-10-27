import Employee from "../models/employee";
import { SecretGiversInterface } from "../models/model.types";
import SecretSantaGame from "../models/secret-santa-game";
import Button from "../ui/button/button";

type AssignSecretSantaProps = {
  employees: Employee[];
  prevEmployees: SecretGiversInterface[];
  handleSetAssignments: (emp: Map<Employee, Employee>) => void;
};

function AssignSecretSanta({
  employees,
  prevEmployees,
  handleSetAssignments,
}: AssignSecretSantaProps) {
  const disabled = employees.length <= 0 || prevEmployees.length <= 0;
  const handleAssign = () => {
    try {
      const previousAssignments = prevEmployees || []; // Replace with actual logic to load previous assignments
      const game = new SecretSantaGame(employees, previousAssignments);
      const result = game.generateAssignments();
      handleSetAssignments(result);
    } catch (error) {
      const typedError = error as Error;
      alert(typedError.message);
    }
  };
  return (
    <Button onClick={handleAssign} disabled={disabled}>
      Assign Secret Santa
    </Button>
  );
}

export default AssignSecretSanta;
