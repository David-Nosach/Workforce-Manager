# Workforce-Manager

## Description

This is a command-line application that allows a business owner to view and manage the departments, roles, and employees in their company. The application provides functionality to organize and plan the business effectively by performing various operations on the company's data stored in a MySQL database.

Video Walkthrough - https://drive.google.com/file/d/1cXnKr7N_jJ2ntzvYTBjnnN8xJO5kaESw/view

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

   1. Viewing all departments, roles, and employees
   2. Adding a department, role, or employee
   3. Updating an employee's role
