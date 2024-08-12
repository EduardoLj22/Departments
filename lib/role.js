const pool = require('../config/connection');

class Role {
  static async getAllRoles() {
    try {
      const result = await pool.query(`
        SELECT roles.id, roles.title, roles.salary, departments.name AS department
        FROM roles
        JOIN departments ON roles.department_id = departments.id
      `);
      return result.rows;
    } catch (err) {
      console.error('Error retrieving roles', err);
    }
  }

  static async addRole(title, salary, department_id) {
    try {
      const result = await pool.query(
        'INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *',
        [title, salary, department_id]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Error adding role', err);
    }
  }
}

module.exports = Role;
