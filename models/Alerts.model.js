const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertsSchema = new Schema(
  {
    createdBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    dangerLevel: { type: String, required: true },
    status: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const Alerts = mongoose.model("Alerts", alertsSchema);

module.exports = Alerts;
