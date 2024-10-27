import Employee from "../models/employee";

type ResultTableProps = {
  assignments: Map<Employee, Employee>;
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
        {Array.from(assignments.entries()).map(([giver, receiver], index) => (
          <tr key={index}>
            <td>{giver.name}</td>
            <td>{giver.email}</td>
            <td>{receiver.name}</td>
            <td>{receiver.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
