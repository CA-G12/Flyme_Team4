const deletePilot = require('../../database/queries/pilots/deletePilot');

const removePilot = (req, res) => {
    const { id } = req.params;
    deletePilot(id)
        .then(data => res.redirect('/admin'))
        .catch(err => res.json({ message: 'Error!' }));
}

module.exports = removePilot;