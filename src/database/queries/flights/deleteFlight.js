const connection = require('../../config/connection');

const deleteFlight = (id) => {
    let sql = {
        text: "DELETE FROM flights WHERE id = $1",
        values: [id]
    }
    return connection.query(sql);
}

module.exports = deleteFlight;