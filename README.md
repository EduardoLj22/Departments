Employee Management System
This is a command-line application that allows a business owner to view and manage departments, roles, and employees in their company, helping to organize and plan the business efficiently.

Table of Contents
Description
Installation
Usage
Features
Technologies Used
Contributing
License
Description
The Employee Management System is a Node.js application that interfaces with a PostgreSQL database. The application enables users to:

View all departments, roles, and employees.
Add departments, roles, and employees.
Update employee roles.
This application is designed to be run from the command line, offering a simple and effective way to manage employee data.

Installation
Prerequisites
Node.js and npm installed on your machine.
PostgreSQL installed and running.
Git installed.
Steps
Clone the Repository

bash
Copiar código
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
Install Dependencies

Navigate to the project directory and install the required dependencies:

bash
Copiar código
npm install
Set Up the Database

Open your PostgreSQL terminal or use a tool like pgAdmin.

Run the schema.sql script to create the database and tables:

bash
Copiar código
psql -U postgres -f db/schema.sql
(Optional) Populate the database with initial data using the seeds.sql script:

bash
Copiar código
psql -U postgres -f db/seeds.sql
Update Database Configuration

Ensure the database configuration in config/connection.js matches your local setup (username, password, etc.).

Usage
To start the application, run the following command:

bash
Copiar código
npm start
or

bash
Copiar código
node index.js
Features
View All Departments: Lists all departments in the company.
View All Roles: Lists all roles along with their department and salary.
View All Employees: Lists all employees, including their roles, departments, salaries, and managers.
Add a Department: Allows the user to add a new department.
Add a Role: Allows the user to add a new role with a specific salary and department.
Add an Employee: Allows the user to add a new employee, specifying their role and manager.
Update an Employee Role: Allows the user to update the role of an existing employee.
Example
When the application runs, it presents the user with a list of options to choose from. Here’s an example of the main menu:

sql
Copiar código
? What would you like to do?
  > View All Departments
    View All Roles
    View All Employees
    Add a Department
    Add a Role
    Add an Employee
    Update an Employee Role
    Exit
Technologies Used
Node.js: JavaScript runtime for building the command-line application.
Inquirer.js: For handling user input.
PostgreSQL: Database for storing and managing employee data.
pg: Node.js library for interfacing with PostgreSQL.
Contributing
Contributions are welcome! If you’d like to contribute to this project, please fork the repository and make changes as you’d like. Pull requests are warmly welcomed.

Fork the Project
Create your Feature Branch (git checkout -b feature/YourFeature)
Commit your Changes (git commit -m 'Add YourFeature')
Push to the Branch (git push origin feature/YourFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.
