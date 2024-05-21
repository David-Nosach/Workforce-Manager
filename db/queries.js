const connection = require("./connection");

// Function to get all departments
const getDepartments = async () => {
  const [rows] = await connection.query("SELECT id, name FROM department");
  return rows;
};

// Function to get all roles
const getRoles = async () => {
  const [rows] = await connection.query(
    "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id"
  );
  return rows;
};

// Function to get all employees
const getEmployees = async () => {
  const [rows] = await connection.query(
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id'
  );
  return rows;
};

// Function to add a new department
const addDepartment = async (name) => {
  await connection.query("INSERT INTO department (name) VALUES (?)", [name]);
};

// Function to add a new role
const addRole = async (title, salary, department_id) => {
  await connection.query(
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
    [title, salary, department_id]
  );
};

// Function to add a new employee
const addEmployee = async (first_name, last_name, role_id, manager_id) => {
  await connection.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
    [first_name, last_name, role_id, manager_id]
  );
};

// Function to update an employee's role
const updateEmployeeRole = async (employee_id, role_id) => {
  await connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [
    role_id,
    employee_id,
  ]);
};

// Exporting the functions to be used in other parts of the application
module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
