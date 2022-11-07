const express = require("express");
const {
  getParks,
  getParkById,
  deleteParkById,
  postPark,
  patchParkById,
  getRidesByParkId,
  getRideById,
} = require("./controllers/parks");

const app = express();
app.use(express.json()); //you have to add this on task 3

app.get("/api/parks", getParks);
app.post("/api/parks", postPark);

app.get("/api/parks/:park_id", getParkById);
app.delete("/api/parks/:park_id", deleteParkById);
app.patch("/api/parks/:park_id", patchParkById);

app.get("/api/parks/:park_id/rides", getRidesByParkId);
app.get("/api/rides/:ride_id", getRideById);

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Route not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

module.exports = app;
