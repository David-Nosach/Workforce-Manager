-- Drop the database if it exists
DROP DATABASE IF EXISTS company_db;

-- Create the database
CREATE DATABASE company_db;

-- Use the company_db database
USE company_db;

-- Create the department table
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Create the role table
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create the employee table
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Insert initial departments
INSERT INTO department (name) VALUES ('Engineering'), ('Finance'), ('Human Resources');

-- Insert initial roles
INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 90000, 1), 
('Accountant', 70000, 2), 
('HR Specialist', 60000, 3);

-- Insert initial employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL), 
('Jane', 'Smith', 2, 1), 
('Mike', 'Johnson', 3, NULL);
