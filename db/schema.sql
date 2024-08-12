-- Drop the database if it exists
DROP DATABASE IF EXISTS company_db;

-- Create a new database
CREATE DATABASE company_db;

-- Connect to the new database
\c company_db;

-- Drop tables if they exist (optional but included as a safeguard)
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

-- Create the departments table
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Create the roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary NUMERIC(10, 2) NOT NULL,
    department_id INT REFERENCES departments(id)
);

-- Create the employees table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT REFERENCES roles(id),
    manager_id INT REFERENCES employees(id)
);
