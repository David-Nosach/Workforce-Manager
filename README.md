# Workforce-Manager

## Description

This is a command-line application that allows a business owner to view and manage the departments, roles, and employees in their company. The application provides functionality to organize and plan the business effectively by performing various operations on the company's data stored in a MySQL database.

## Installation

1. Clone the repository to your local machine:
   git clone https://github.com/yourusername/employee-management-system.git
2. Navigate to the project directory
3. Install the necessary dependencies using npm:
   npm install
4. Ensure you have MySQL installed and running on your machine.
5. Create and seed the database:
   1. Open a MySQL shell:
      1. mysql -u root -p
   2. Source the seeds.sql file to create and populate the database:
      1. source db/seeds.sql;

## Usage

1. Start the application:
   node src/index.js

2. Follow the on-screen prompts to perform various operations such as:

   Viewing all departments, roles, and employees
   Adding a department, role, or employee
   Updating an employee's role

## Features

View All Departments: Displays a formatted table with department names and IDs.
View All Roles: Shows job titles, role IDs, the department each role belongs to, and the salaries for each role.
View All Employees: Displays a formatted table with employee IDs, first and last names, job titles, departments, salaries, and managers.
Add a Department: Prompts the user to enter a department name and adds it to the database.
Add a Role: Prompts the user to enter the role name, salary, and department, then adds the role to the database.
Add an Employee: Prompts the user to enter the employee’s first name, last name, role, and manager, then adds the employee to the database.
Update an Employee Role: Prompts the user to select an employee and a new role for that employee, then updates the employee's role in the database.
