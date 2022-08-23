const getAllPilots = require("../../database/queries/pilots/getAllPilots");

const getPilots = (req, res) => {
    getAllPilots()
    .then(result => res.json(result.rows))
    .catch(err => res.json({message: 'Error!'}))
}

module.exports = getPilots;