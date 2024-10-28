import Upload from "../ui/upload/upload";

type LastYearSantaCsvProps = {
  onUpload: (file: File) => void;
};

function LastYearSantaCsv({ onUpload }: LastYearSantaCsvProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <Upload accept=".xlsx,.xls,.csv,.ods" handleChange={handleFileUpload} />
  );
}

export default LastYearSantaCsv;
