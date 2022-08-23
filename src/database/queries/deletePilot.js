const connection = require('../config/connection');

const deletePilot = (id) => {
    let sql = {
        text: "DELETE FROM pilots WHERE id = $1",
        values: [id]
    }
    return connection.query(sql);
}

module.exports = deletePilot;