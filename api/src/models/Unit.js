const mongoose = require("mongoose");

const factionsEnum = ['Rebel', 'Empire', 'Republic', 'Separatist']
const rankEnum = ['Commander', 'Operative', 'Corps', 'Special Forces', 'Support', 'Heavy']
const unitTypeEnum = ['Trooper', 'Droid Trooper', 'Clone Trooper', 'Emplacement Trooper', 'Repulsor Vehicle', 'Ground Vehicle', 'Creature Trooper']
const defenseDieEnum = ['Red', 'White']

const Schema = mongoose.Schema;

const unitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    faction: {
        type: String,
        enum: factionsEnum,
        required: true,
    },
    unique: {
        type: Boolean,
        default: false,
    },
    points: {
        type: Number,
        required: true,
    },
    rank: {
        type: String,
        enum: rankEnum,
        required: true,
    },
    upgrades: [{
        type: Schema.Types.ObjectId,
        ref: 'Upgrade',
    }],
    cardImg: {
        type: String,
    },
});



const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;