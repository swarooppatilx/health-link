// src/db.ts
import mysql from 'mysql2/promise';

// Get the environment variables
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '1';
const DB_NAME = process.env.DB_NAME || 'healthlink';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to get the connection
const getConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database');
    return connection;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
};

export { pool, getConnection };
