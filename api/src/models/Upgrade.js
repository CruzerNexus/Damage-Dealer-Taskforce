const mongoose = require("mongoose");

const upgradeTypeEnum = ['Command', 'Comms', 'Config', 'Crew', 'Force', 'Gear', 'Generator', 'Grenades', 'Hardpoint', 'Heavy Weapon', 'Personnel', 'Pilot', 'Training']

const upgradeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    upgradeType: {
        type: String,
        enum: upgradeTypeEnum,
        required: true,
    },
    restriction: Object,
    points: {
        type: Number,
        required: true,
    },
    cardImg: String,
});

Upgrade.virtual('units', {
    ref: 'Unit',
    localField: '_id',
    foreignField: 'upgrades'
});

const Upgrade = mongoose.model('Upgrade', upgradeSchema);

module.exports = Upgrade;