import React from "react";

type UploadProps = {
  accept: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Upload({ accept, handleChange }: UploadProps) {
  return <input type="file" accept={accept} onChange={handleChange} />;
}

export default Upload;
