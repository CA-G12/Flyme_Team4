const deletePilot = require('../database/queries/deletePilot');

const removePilot = (req, res) => {
    const {id} = req.params;
    deletePilot(id)
    .then(data => res.redirect('/'))
    .then(err =>res.json({message: 'Error!'}));
}

module.exports = removePilot;