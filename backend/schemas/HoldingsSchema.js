const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: { type: String, required: true, trim: true },
  qty: { type: Number, required: true, min: 0 },
  avg: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  net: { type: String, required: true, trim: true },
  day: { type: String, required: true, trim: true },
  isLoss: { type: Boolean, default: false },
});

HoldingsSchema.index({ name: 1 }, { unique: true });

module.exports = { HoldingsSchema };
