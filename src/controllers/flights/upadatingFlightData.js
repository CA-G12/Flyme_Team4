const updateFlightData = require('../../database/queries/flights/updateFlightData');
const updatingData = (req, res) => {
    const { date, time, directions, pilot_id, id } = req.body;
    updateFlightData({ date, time, directions, pilot_id, id })
        .then(data => res.redirect('/admin'))
        .catch(err => res.json({ message: 'Error!' }))
}

module.exports = updatingData;