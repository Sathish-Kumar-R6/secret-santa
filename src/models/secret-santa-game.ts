// SecretSantaGame Class
import Employee from "./employee";
import { SecretGiversInterface } from "./model.types";

class SecretSantaGame {
  employees: Employee[];
  previousAssignments: SecretGiversInterface[];

  constructor(
    employees: Employee[],
    previousAssignments: SecretGiversInterface[],
  ) {
    this.employees = employees;
    this.previousAssignments = previousAssignments;
  }

  generateAssignments(): Map<Employee, Employee> {
    const assignments = new Map<Employee, Employee>();
    const receivers = [...this.employees];

    this.employees.forEach((employee) => {
      // Filter out employee themselves and last year's assignment, if applicable
      const availableReceivers = receivers.filter(
        (receiver) =>
          receiver.name !== employee.name &&
          !this.previousAssignments.some(
            (assignment) =>
              assignment.employee_email === employee.email &&
              assignment.secret_emp_email === receiver.email,
          ),
      );

      if (availableReceivers.length === 0) {
        throw new Error(
          "No valid assignment for some employees. Try shuffling employees or check data.",
        );
        // return this.generateAssignments()
      }

      // Randomly assign an available receiver and remove them from the list
      const chosenIndex = Math.floor(Math.random() * availableReceivers.length);
      const chosenReceiver = availableReceivers[chosenIndex];
      assignments.set(employee, chosenReceiver);

      receivers.splice(receivers.indexOf(chosenReceiver), 1); // Remove assigned receiver
    });

    return assignments;
  }
}

export default SecretSantaGame;
