const { Pool } = require('pg');

require('dotenv').config();

const { DB_URl } = process.env;
const { NODE_ENV } = process.env;

let dbUrl = '';
if (!DB_URl) throw new Error('No database url');
if (NODE_ENV === 'test') {
    dbUrl = '';
}
else if (NODE_ENV === 'production') {
    dbUrl = '';
}
else if (NODE_ENV === 'development') {
    dbUrl = DB_URl;
}
else {
    throw new Error('invalid database url');
}
const connection = new Pool({
    connectionString: dbUrl,
    ssl: new URL(dbUrl).hostname === 'localhost' ? false : true
});

module.exports = connection;