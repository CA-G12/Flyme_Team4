const connection = require('../../config/connection');

const getPilotName = ({id}) => {
    let sql = {
        text: "SELECT name FROM pilots INNER JOIN flights on pilots.id = flights.pilot_id WHERE pilots.id = $1",
        values: [id]
    }
    return connection.query(sql)
}

module.exports = getPilotName;