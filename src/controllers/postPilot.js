const createPilot = require("../database/queries/createPilot")

const postPilot = (req, res) => {
    const {name, image_url, experience} = req.body
    createPilot({name, image_url, experience})
    .then(result => res.redirect('/'))
    .catch(err => res.json({message: 'Error!'}));
}

module.exports = postPilot;