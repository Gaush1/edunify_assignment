import mysql from "mysql2/promise";
// const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const dbconnection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'edunify_assignment',
});

export default dbconnection;
