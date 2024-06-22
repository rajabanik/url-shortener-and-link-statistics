"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log('Loaded environment variables:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
var pool = mysql2_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    authPlugins: {
        mysql_clear_password: function () { return function () { return Buffer.from('9862629723Raja@1', 'utf8'); }; },
    },
});
pool.getConnection(function (err, connection) {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
    else {
        console.log('Successfully connected to the database');
        connection.release();
    }
});
exports.default = pool.promise();
