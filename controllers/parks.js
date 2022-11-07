const {
  selectParks,
  selectParkById,
  insertPark,
  removeParkById,
  updateParkById,
} = require("../models/parks.js");

//MAKE SURE YOU ARE BRINGING IN MODEL FUNCTIONS

exports.getParks = (req, res) => {
  selectParks().then((parks) => {
    // res.status(200);
    // ^^^ defaults to 200
    res.send({ parks });
    //putting parks like this because the test wants an array as the value to a parks key. Some get stuck by not putting it in curley braces or by calling it something else.
  });
};

exports.getParkById = (req, res) => {
  const { park_id } = req.params;
  selectParkById(park_id).then((park) => {
    res.status(200).send({ park });
  });
};

//You need to add app.use(express.json()) in app.js for this one
exports.postPark = (req, res) => {
  const newPark = req.body;
  insertPark(newPark).then((park) => {
    res.status(201).send({ park });
  });
};

exports.deleteParkById = (req, res) => {
  const { park_id } = req.params;
  removeParkById(park_id).then((deletedRows) => {
    if (deletedRows > 0) res.sendStatus(204);
  });
};

exports.patchParkById = (req, res) => {
  const { park_id } = req.params;
  console.log(req.body);
  const { park_name, annual_attendance } = req.body;
  updateParkById(park_id, park_name, annual_attendance).then((newPark) => {
    res.status(200).send({ park: newPark });
  });
};
