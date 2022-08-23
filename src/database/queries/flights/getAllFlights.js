const connection = require("../../config/connection");

const getAllFlights = () => {
  return connection.query("SELECT * from flights;");
};

module.exports = getAllFlights;
