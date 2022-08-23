const connection = require('../config/connection');

const createPilot = ({name, image_url, experience}) => {
let sql = {
    text: 'INSERT INTO pilots(name, image_url, experience) VALUES ($1, $2, $3)',
    values: [name, image_url, experience]
}
    return connection.query(sql)
}

module.exports = createPilot;