import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";

type ResultTableProps = {
  assignments: SecretSheetInterface[];
};

function ResultTable({ assignments }: ResultTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee Email</th>
          <th>Secret Child Name</th>
          <th>Secret Child Email</th>
        </tr>
      </thead>
      <tbody>
        {assignments.map((assignment, index) => (
          <tr key={index}>
            <td>{assignment.Employee_Name}</td>
            <td>{assignment.Employee_EmailID}</td>
            <td>{assignment.Secret_Child_Name}</td>
            <td>{assignment.Secret_Child_EmailID}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
