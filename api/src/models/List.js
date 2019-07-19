const mongoose = require("mongoose");

const factionsEnum = ["Rebel", "Empire", "Republic", "Separatist"];

const listSchema = mongoose.Schema({
  name: String,
  faction: {
    type: String,
    enum: factionsEnum,
    required: true
  },
  maxPoints: Number,
  points: Number,
  units: [Object],
  upgrades: [Object],
  commands: [Object],
  battlePlans: [Object],
});

const List = mongoose.model("List", listSchema);

module.exports = List;
