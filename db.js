/** Database connection for messagely. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'messagely',
    password: 'postgres',
    port: 5432
});

client.connect();


module.exports = client;
