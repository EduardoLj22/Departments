const inquirer = require('inquirer');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');
const pool = require('./config/connection');

async function runApp() {
  try {
    console.log('Connected to the database.');
    await mainMenu(); // Start the main menu
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

async function mainMenu() {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add a Department',
      'Add a Role',
      'Add an Employee',
      'Update an Employee Role',
      'Exit'
    ]
  });

  switch (action) {
    case 'View All Departments':
      const departments = await Department.getAllDepartments();
      console.table(departments);
      break;
    case 'View All Roles':
      const roles = await Role.getAllRoles();
      console.table(roles);
      break;
    case 'View All Employees':
      const employees = await Employee.getAllEmployees();
      console.table(employees);
      break;
    case 'Add a Department':
      const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
      });
      await Department.addDepartment(name);
      console.log('Department added!');
      break;
    case 'Add a Role':
      const roleData = await inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter the name of the role:'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Enter the salary for the role:'
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'Enter the department ID for the role:'
        }
      ]);
      await Role.addRole(roleData.title, roleData.salary, roleData.department_id);
      console.log('Role added!');
      break;
    case 'Add an Employee':
      const employeeData = await inquirer.prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'Enter the first name of the employee:'
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'Enter the last name of the employee:'
        },
        {
          type: 'input',
          name: 'role_id',
          message: 'Enter the role ID for the employee:'
        },
        {
          type: 'input',
          name: 'manager_id',
          message: 'Enter the manager ID for the employee (leave blank if none):'
        }
      ]);
      await Employee.addEmployee(employeeData.first_name, employeeData.last_name, employeeData.role_id, employeeData.manager_id || null);
      console.log('Employee added!');
      break;
    case 'Update an Employee Role':
      const updateData = await inquirer.prompt([
        {
          type: 'input',
          name: 'employee_id',
          message: 'Enter the employee ID to update:'
        },
        {
          type: 'input',
          name: 'role_id',
          message: 'Enter the new role ID for the employee:'
        }
      ]);
      await Employee.updateEmployeeRole(updateData.employee_id, updateData.role_id);
      console.log('Employee role updated!');
      break;
    case 'Exit':
      await pool.end();
      break;
  }

  // Re-run the main menu
  if (action !== 'Exit') await mainMenu();
}

runApp();
