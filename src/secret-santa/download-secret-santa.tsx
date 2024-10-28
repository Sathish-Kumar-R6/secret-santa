import saveAs from "file-saver";
import Button from "../ui/button/button";
import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";

type DownloadSecretSantaProps = {
  assignments: SecretSheetInterface[];
};

function DownloadSecretSanta({
  assignments,
}: Readonly<DownloadSecretSantaProps>) {
  const disabled = assignments && assignments.length <= 0;
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
        assignments
          .map(
            ({
              Employee_Name,
              Employee_EmailID,
              Secret_Child_Name,
              Secret_Child_EmailID,
            }) =>
              `${Employee_Name},${Employee_EmailID},${Secret_Child_Name},${Secret_Child_EmailID}`,
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
