const connection = require('../../config/connection');

const updateFlightData = ({ date, time, directions, pilot_id, id }) => {
    const sql = {
        text: "UPDATE flights SET date = $1, time = $2, directions = $3, pilot_id = $4 WHERE id = $5",
        values: [date, time, directions, pilot_id, id]
    }
    return connection.query(sql);
}

module.exports = updateFlightData;