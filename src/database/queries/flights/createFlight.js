const connection = require('../../config/connection');

const createFlight = ({ date, time, directions, pilot_id }) => {
    let sql = {
        text: 'INSERT INTO flights(date, time, directions, pilot_id) VALUES ($1, $2, $3, $4)',
        values: [date, time, directions, pilot_id]
    }
    return connection.query(sql)
}

module.exports = createFlight;