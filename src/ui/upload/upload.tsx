import React from "react";
import styles from "./upload.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type UploadProps = {
  accept: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  className?: string;
};

function Upload({ accept, handleChange, label, className }: UploadProps) {
  return (
    <div className={cx("input-upload-container")}>
      <label className={cx("input-upload-label")}>{label}</label>
      <input
        type="file"
        accept={accept}
        onChange={handleChange}
        className={cx(className, "input-upload-input")}
      />
    </div>
  );
}

export default Upload;
