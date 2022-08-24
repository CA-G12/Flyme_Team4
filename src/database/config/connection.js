const { Pool } = require('pg');

require('dotenv').config();

const { DATABASE_URL } = process.env;
const { NODE_ENV } = process.env;

let dbUrl = '';
if (!DATABASE_URL) throw new Error('No database url');
if (NODE_ENV === 'test') {
    dbUrl = '';
}
else if (NODE_ENV === 'production') {
    dbUrl = DATABASE_URL;
}
else if (NODE_ENV === 'development') {
    dbUrl = DATABASE_URL;
}
else {
    throw new Error('invalid database url');
}
const connection = new Pool({
    connectionString: dbUrl,
    ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false, } : false,
});

module.exports = connection;