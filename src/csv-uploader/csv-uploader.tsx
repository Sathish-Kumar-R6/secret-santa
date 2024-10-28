import React from "react";
import Upload from "../ui/upload/upload";

type CsvUPloaderProps = {
  onUpload: (file: File) => void;
};

function CsvUploader({ onUpload }: CsvUPloaderProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };
  return (
    <div>
      <h3>Upload Employee Excel or CSV File</h3>
      <Upload
        label="Upload this year employee file"
        accept=".xlsx,.xls,.csv,.ods"
        handleChange={handleFileUpload}
      />
    </div>
  );
}

export default CsvUploader;
