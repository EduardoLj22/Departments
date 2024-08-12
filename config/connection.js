const { Pool } = require('pg');

// Create a pool of connections
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'E22052001leon..',
  database: 'company_db',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
