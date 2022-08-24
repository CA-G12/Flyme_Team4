const deleteFlight = require('../../database/queries/flights/deleteFlight');
const removeFlight = (req, res) => {
    const { id } = req.params;
    deleteFlight(id)
        .then(data => res.redirect('/admin'))
        .catch(err => res.json({ message: 'Error!' }));
}

module.exports = removeFlight;