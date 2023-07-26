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

// const moods = [
//   {
//     background: `clouds`,
//     danger: `low`,
//     message: `Please ping my emergency contact!`,
//   },
//   {
//     background: `rain`,
//     danger: `meduim`,
//     message: `I'm in danger, please come over and pick me up`,
//   },
//   {
//     background: `thunder`,
//     danger: `high`,
//     message: `Please call the police`,
//   },
//   {
//     background: `sunny`,
//     danger: `safe`,
//     message: ``,
//   },
// ];

// async function createAlerts() {
//   try {
//     await Alerts.deleteMany();

//     for (const mood of moods) {
//       const newAlert = new Alerts({
//         createdBy: [],
//         dangerLevel: mood.danger,
//         status: "active",
//         message: mood.message,
//       });
//       await newAlert.save();
//       console.log("Alert created:", newAlert);
//     }

//     mongoose.connection.close();
//   } catch (error) {
//     console.error("Error creating alerts:", error);
//   }
// }

// createAlerts();

module.exports = Alerts;

/* 
create react page with the form
create the form which creates alerts - axios.post
post route receives the req from the frontend
create the alert in the database

create the route for Alerts.find() */