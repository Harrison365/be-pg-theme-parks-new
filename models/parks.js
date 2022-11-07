const db = require("../db/index.js");

exports.selectParks = () => {
  return db.query(`SELECT * FROM parks;`).then((result) => result.rows);
};

exports.selectParkById = () => {};

exports.insertPark = () => {};

exports.removeParkById = () => {};

exports.updateParkById = () => {};
