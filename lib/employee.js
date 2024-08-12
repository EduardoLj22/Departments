const pool = require('../config/connection');

class Employee {
  static async getAllEmployees() {
    try {
      const result = await pool.query(`
        SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employees
        LEFT JOIN roles ON employees.role_id = roles.id
        LEFT JOIN departments ON roles.department_id = departments.id
        LEFT JOIN employees manager ON manager.id = employees.manager_id
      `);
      return result.rows;
    } catch (err) {
      console.error('Error retrieving employees', err);
    }
  }

  static async addEmployee(first_name, last_name, role_id, manager_id) {
    try {
      const result = await pool.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [first_name, last_name, role_id, manager_id]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Error adding employee', err);
    }
  }

  static async updateEmployeeRole(employee_id, role_id) {
    try {
      const result = await pool.query(
        'UPDATE employees SET role_id = $1 WHERE id = $2 RETURNING *',
        [role_id, employee_id]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Error updating employee role', err);
    }
  }
}

module.exports = Employee;
