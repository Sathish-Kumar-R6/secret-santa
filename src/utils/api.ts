import { ASSIGN_SANTA_API } from "../config/api-config";
import { SecretSheetInterface } from "../csv-uploader/csv-uploader.types";

type AssignSantaResponse = {
  success: boolean;
  data: SecretSheetInterface[];
};

export const assignSanta = async (
  employeeFile: File,
  previousAssignmentsFile: File,
): Promise<AssignSantaResponse> => {
  try {
    const formData = new FormData();
    formData.append("employeeFile", employeeFile);
    formData.append("previousAssignmentsFile", previousAssignmentsFile);

    const response = await fetch(ASSIGN_SANTA_API, {
      method: "POST",
      body: formData,
    });

    const result: AssignSantaResponse = await response.json();
    return result;
  } catch (error) {
    const typedError = error as Error;
    throw typedError;
  }
};
