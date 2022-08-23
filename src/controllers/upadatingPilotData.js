const updatePilotData = require('../database/queries/updatePilotData');

const updatingData = (req, res) => {
    const {name, image_url, experience, id} = req.body;
    updatePilotData({name, image_url, experience, id})
    .then(res => res.redirect('/pilots'))
    .catch(err => res.json({message: 'Error!'}))
}

module.exports = updatingData;