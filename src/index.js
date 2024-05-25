// Importing necessary dependencies
const inquirer = require("inquirer"); // Library for handling user input
const db = require("../db/queries"); // Module containing database query functions

// Function to start the command-line interface
const start = async () => {
  // Prompting the user to choose an action
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?", // Prompt message
      choices: [
        // List of available actions
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit", // Option to exit the application
      ],
    },
  ]);

  // Handling user-selected action
  switch (action) {
    case "View all departments": // Display all departments
      const departments = await db.getDepartments();
      console.table(departments); // Display departments in a formatted table
      break;
    case "View all roles": // Display all roles
      const roles = await db.getRoles();
      console.table(roles); // Display roles in a formatted table
      break;
    case "View all employees": // Display all employees
      const employees = await db.getEmployees();
      console.table(employees); // Display employees in a formatted table
      break;
    case "Add a department": // Add a new department
      const { deptName } = await inquirer.prompt([
        {
          type: "input",
          name: "deptName",
          message: "Enter the name of the department:",
        },
      ]);
      await db.addDepartment(deptName);
      console.log(`Added ${deptName} to the database.`);
      break;
    case "Add a role": // Add a new role
      const { roleName, roleSalary, roleDeptId } = await inquirer.prompt([
        {
          type: "input",
          name: "roleName",
          message: "Enter the name of the role:",
        },
        {
          type: "input",
          name: "roleSalary",
          message: "Enter the salary for the role:",
        },
        {
          type: "input",
          name: "roleDeptId",
          message: "Enter the department ID for the role:",
        },
      ]);
      await db.addRole(roleName, roleSalary, roleDeptId);
      console.log(`Added ${roleName} to the database.`);
      break;
    case "Add an employee": // Add a new employee
      const { empFirstName, empLastName, empRoleId, empManagerId } =
        await inquirer.prompt([
          {
            type: "input",
            name: "empFirstName",
            message: "Enter the employee's first name:",
          },
          {
            type: "input",
            name: "empLastName",
            message: "Enter the employee's last name:",
          },
          {
            type: "input",
            name: "empRoleId",
            message: "Enter the employee's role ID:",
          },
          {
            type: "input",
            name: "empManagerId",
            message:
              "Enter the manager ID for the employee (if none, leave blank):",
          },
        ]);
      await db.addEmployee(
        empFirstName,
        empLastName,
        empRoleId,
        empManagerId || null
      );
      console.log(`Added ${empFirstName} ${empLastName} to the database.`);
      break;
    case "Update an employee role": // Update an employee's role
      const { updateEmpId, updateRoleId } = await inquirer.prompt([
        {
          type: "input",
          name: "updateEmpId",
          message: "Enter the employee ID to update:",
        },
        {
          type: "input",
          name: "updateRoleId",
          message: "Enter the new role ID for the employee:",
        },
      ]);
      await db.updateEmployeeRole(updateEmpId, updateRoleId);
      console.log(
        `Updated employee ID ${updateEmpId} with new role ID ${updateRoleId}.`
      );
      break;
    case "Exit": // Exit the application
      process.exit(); // Terminate the process
  }

  start(); // Restart the CLI prompt
};

start(); // Start the CLI application
