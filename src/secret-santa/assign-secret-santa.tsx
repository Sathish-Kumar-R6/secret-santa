import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";
import Button from "../ui/button/button";

type AssignSecretSantaProps = {
  employees?: File;
  prevEmployees?: File;
  handleSetAssignments: (data: SecretSheetInterface[]) => void;
};

function AssignSecretSanta({
  employees,
  prevEmployees,
  handleSetAssignments,
}: AssignSecretSantaProps) {
  const disabled =
    (employees ? employees.size <= 0 : true) ||
    (prevEmployees ? prevEmployees.size <= 0 : true);
  const handleAssign = () => {
    console.log(employees, prevEmployees, handleSetAssignments);
  };
  return (
    <Button onClick={handleAssign} disabled={disabled}>
      Assign Secret Santa
    </Button>
  );
}

export default AssignSecretSanta;
