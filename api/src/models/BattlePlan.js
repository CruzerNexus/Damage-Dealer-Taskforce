const mongoose = require("mongoose");

const bpTypeEnum = ['Deployment', 'Objective', 'Condition'];

const battlePlanSchema = mongoose.Schema({
    name: String,
    bpType: {
      type: String,
      enum: bpTypeEnum,
      required: true,
    },
    cardImg: String,
});

const BattlePlan = mongoose.model('BattlePlan', battlePlanSchema);

module.exports = BattlePlan;