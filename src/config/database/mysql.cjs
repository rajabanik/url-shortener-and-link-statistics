"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pool = mysql2_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
pool.getConnection(function (err, connection) {
    if (err) {
        console.error('Error connecting to the database', err);
        process.exit(1);
    }
    else {
        console.log('Successfully connected to the database');
        connection.release();
    }
});
exports.default = pool.promise();
