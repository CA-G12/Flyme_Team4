const getPilotName = require("../../database/queries/flights/getPilotName");

const getName = (req, res) => {
    let {id} = req.params;
    getPilotName({id})
    .then(result => res.json(result.rows))
    .catch(err => res.json({message: 'Error!'}))
}

module.exports = getName;