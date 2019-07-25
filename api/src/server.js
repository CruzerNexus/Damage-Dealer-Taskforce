const express = require("express");
const { connectDatabase } = require("./database");
const Unit = require("./models/Unit");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

connectDatabase();

const app = express();
app.use(morgan('tiny'));
app.use(cors());

app.post("/", async (req, res) => {
  const unit = new Unit({
    ...req.body
  });
  await unit.save();
  res.send(unit);
});

app.get("/", async (req, res) => {
  res.send("see ya space cowboy");
});

app.get("/cards", async (req, res) => {
  // console.log(mongoose.connection.db.collection('commandCards'))
  const commandCards = await mongoose.connection.db.collection('commandCards').find({}).toArray();
  const unitCards = await mongoose.connection.db.collection('units').find({}).toArray();
  const upgradeCards = await mongoose.connection.db.collection('upgrades').find({}).toArray();
  const battlePlanCards = await mongoose.connection.db.collection('battlePlans').find({}).toArray();
  res.send({ 
    commandCards,
    unitCards,
    upgradeCards,
    battlePlanCards
  });
});

app.listen(8000, () => console.log("We are online..."));

module.exports = app;
