import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

console.log('Loaded environment variables:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,

  authPlugins: {
    mysql_clear_password: () => () => Buffer.from('9862629723Raja@1', 'utf8'),
  },
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); 
  } else {
    console.log('Successfully connected to the database');
    connection.release(); 
  }
});

export default pool.promise(); 
