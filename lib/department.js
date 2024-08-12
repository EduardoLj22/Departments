const pool = require('../config/connection');

class Department {
  static async getAllDepartments() {
    try {
      const result = await pool.query('SELECT * FROM departments');
      return result.rows;
    } catch (err) {
      console.error('Error retrieving departments', err);
    }
  }

  static async addDepartment(name) {
    try {
      const result = await pool.query('INSERT INTO departments (name) VALUES ($1) RETURNING *', [name]);
      return result.rows[0];
    } catch (err) {
      console.error('Error adding department', err);
    }
  }
}

module.exports = Department;
