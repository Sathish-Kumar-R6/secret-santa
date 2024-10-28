import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";
import Button from "../ui/button/button";
import { assignSanta } from "../utils/api";

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
  const handleAssign = async () => {
    if (employees && prevEmployees) {
      await assignSanta(employees, prevEmployees).then((res) => {
        handleSetAssignments(res.data);
      });
    }
  };
  return (
    <Button onClick={handleAssign} disabled={disabled}>
      Assign Secret Santa
    </Button>
  );
}

export default AssignSecretSanta;
