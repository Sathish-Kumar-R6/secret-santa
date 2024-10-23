// SecretSantaGame Class
import Employee from "./employee";

class SecretSantaGame {
  employees: Employee[];
  previousAssignments: Map<string, string>;

  constructor(employees: Employee[], previousAssignments: Map<string, string>) {
    this.employees = employees;
    this.previousAssignments = previousAssignments;
  }

  assignSecretChildren() {
    const availableChildren = [...this.employees];
    const assignments = new Map<Employee, Employee>();

    for (const employee of this.employees) {
      // Exclude self and last year's child
      const eligibleChildren = availableChildren.filter(
        (child) =>
          child.name !== employee.name &&
          (!this.previousAssignments.has(employee.name) ||
            this.previousAssignments.get(employee.name) !== child.name),
      );

      if (eligibleChildren.length === 0) {
        throw new Error("No valid assignments possible for " + employee.name);
      }

      // Randomly assign a secret child
      const randomIndex = Math.floor(Math.random() * eligibleChildren.length);
      const secretChild = eligibleChildren[randomIndex];

      assignments.set(employee, secretChild);
      availableChildren.splice(randomIndex, 1);
    }

    return assignments;
  }
}

export default SecretSantaGame;
