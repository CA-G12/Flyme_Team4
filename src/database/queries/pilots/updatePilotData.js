const connection = require('../../config/connection');

const updatePilotData = ({ name, image_url, experience, id }) => {
    const sql = {
        text: "UPDATE pilots SET name = $1, image_url = $2, experience = $3 WHERE id = $4",
        values: [name, image_url, experience, id]
    }
    return connection.query(sql);
}

module.exports = updatePilotData;