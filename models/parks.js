const db = require("../db/index.js");

exports.selectParks = () => {
  return db.query(`SELECT * FROM parks;`).then((result) => {
    return result.rows;
  });
};

exports.selectParkById = (park_id) => {
  return db
    .query(`SELECT * FROM parks WHERE park_id = $1;`, [park_id])
    .then((result) => {
      return result.rows[0];
    });
};

exports.insertPark = (newPark) => {
  const { park_name, year_opened, annual_attendance } = newPark;
  return db
    .query(
      `INSERT INTO parks
         (park_name, year_opened, annual_attendance)
       VALUES
         ($1, $2, $3)
       RETURNING *;`,
      [park_name, year_opened, annual_attendance]
    )
    .then((result) => result.rows[0]);
};

exports.removeParkById = (park_id) => {
  return db
    .query(`DELETE FROM parks WHERE park_id = $1;`, [park_id])
    .then((result) => {
      return result.rowCount;
    });
};

exports.updateParkById = (park_id, park_name, annual_attendance) => {
  return db
    .query(
      `UPDATE parks 
     SET park_name = $1, annual_attendance = $2
     WHERE park_id = $3
     RETURNING *`,
      [park_name, annual_attendance, park_id]
    )
    .then((result) => {
      return result.rows[0]; //[0] as were only expecting 1 and dont want an array
    });
};
