const { selectParks } = require("../models/parks.js");

exports.getParks = (req, res) => {
  selectParks().then((parks) => {
    /**
     * implement the selectParks model function and complete the controller
     * by responding with the parks to pass the first set of tests
     */
    res.status(200);
    res.send({ parks });
  });
};

exports.getParkById = () => {};

exports.postPark = () => {};

exports.deleteParkById = () => {};

exports.patchParkById = () => {};
