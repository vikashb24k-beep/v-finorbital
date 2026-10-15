const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = model("Position", PositionsSchema, "positions");

module.exports = { PositionsModel };
