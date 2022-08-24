const createFlight = require("../../database/queries/flights/createFlight")

const postFlight = (req, res) => {
    const {date, time, directions, pilot_id} = req.body
    createFlight({date, time, directions, pilot_id})
    .then(result => res.redirect('/admin'))
    .catch(err => res.json({message: 'Error!'}));
}

module.exports = postFlight;