const getAllFlights = require("../../database/queries/flights/getAllFlights");

const getFlights = (req, res) => {
    getAllFlights()
    .then(result => res.json(result.rows))
    .catch(err => res.json({message: 'Error!'}))
}

module.exports = getFlights;