import { useState } from "react";
import ResultTable from "../results/result-table";
import DownloadSecretSanta from "./download-secret-santa";
import AssignSecretSanta from "./assign-secret-santa";
import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";
import styles from "./secret-santa.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SecretSantaAssignerProps = {
  employeeFile?: File;
  prevEmployeeFile?: File;
};
const SecretSantaAssigner = ({
  employeeFile,
  prevEmployeeFile,
}: SecretSantaAssignerProps) => {
  const [assignments, setAssigments] = useState<SecretSheetInterface[]>([]);
  const handleSetAssignments = (data: SecretSheetInterface[]) => {
    setAssigments(data);
  };

  return (
    <div>
      <div className={cx("santa-buttons")}>
        <AssignSecretSanta
          employees={employeeFile}
          prevEmployees={prevEmployeeFile}
          handleSetAssignments={handleSetAssignments}
        />
        <DownloadSecretSanta assignments={assignments} />
      </div>
      <div className={cx("santa-table")}>
        {assignments && <ResultTable assignments={assignments} />}
      </div>
    </div>
  );
};

export default SecretSantaAssigner;
