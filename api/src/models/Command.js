const mongoose = require("mongoose");

const factionsEnum = ['Rebel', 'Empire', 'Republic', 'Separatist']

const commandSchema = mongoose.Schema({
    id: String,
    name: String,
    text: String,
    pips: Number,
    activated: String,
    faction: String,
    required: Array,
    waves: Array
});

const Command = mongoose.model('Command', commandSchema);

module.exports = BattlePlan;