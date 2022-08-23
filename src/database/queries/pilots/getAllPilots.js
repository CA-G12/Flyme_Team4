const connection = require("../../config/connection");

const getAllPilots = () => {
  return connection.query("SELECT * from pilots;");
};

module.exports = getAllPilots;
