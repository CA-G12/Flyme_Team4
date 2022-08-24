const connection = require("../../config/connection");

const getAllFlights = () => {
  return connection.query("SELECT flights.id, flights.date, flights.directions, flights.pilot_id, flights.time , pilots.name from flights  inner join pilots  on flights.pilot_id=pilots.id;");
};

module.exports = getAllFlights;
