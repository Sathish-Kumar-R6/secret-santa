export interface EmployeeRow {
  Employee_Name: string;
  Employee_EmailID: string;
}

export interface SecretSheetInterface extends EmployeeRow {
  Secret_Child_Name: string;
  Secret_Child_EmailID: string;
}
