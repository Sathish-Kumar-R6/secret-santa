import classNames from "classnames/bind";
import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";
import styles from "./result-table.module.css";
const cx = classNames.bind(styles);

type ResultTableProps = {
  assignments: SecretSheetInterface[];
};

function ResultTable({ assignments }: ResultTableProps) {
  return (
    <table className={cx("santa-table")}>
      <thead>
        {assignments.length > 0 && (
          <tr>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Secret Child Name</th>
            <th>Secret Child Email</th>
          </tr>
        )}
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
