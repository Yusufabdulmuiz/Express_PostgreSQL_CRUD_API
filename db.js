const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("Failed to connect to PostgreSQL:", err.stack);
  } else {
    console.log(" PostgreSQL connected");
    release();
  }
});

module.exports = pool;
