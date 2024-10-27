import saveAs from "file-saver";
import Employee from "../models/employee";
import Button from "../ui/button/button";

type DownloadSecretSantaProps = {
  assignments: Map<Employee, Employee> | null;
};

function DownloadSecretSanta({
  assignments,
}: Readonly<DownloadSecretSantaProps>) {
  const disabled = assignments ? assignments.size <= 0 : true;
  console.log("assignemnts", assignments, assignments?.size);
  const handleDownload = () => {
    if (assignments) {
      const headers = [
        "Employee_Name",
        "Employee_EmailID",
        "Secret_Child_Name",
        "Secret_Child_EmailID",
      ];

      const csvContent =
        headers.join(",") +
        "\n" + // Add headers and a new line
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
    <Button onClick={handleDownload} disabled={disabled}>
      Download CSV
    </Button>
  );
}

export default DownloadSecretSanta;
