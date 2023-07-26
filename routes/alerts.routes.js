const express = require("express");
const Alerts = require("../models/Alerts.model");
const alertsRouter = express.Router();

alertsRouter.get("/alerts", async (req, res) => {
  try {
    const alerts = await Alerts.find().populate("createdBy").sort("createdBy"); // Fetch all alerts and populate the createdBy field
    res.json(alerts);
  } catch (error) {
    console.error("Error fetching alerts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

alertsRouter.post("/alerts", async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const alert = await Alerts.create({
      message: body.message,
      dangerLevel: body.dangerLevel,
      createdBy: body.createdBy,
      status: "Pending",
    });

    console.log(alert);
    res.json({ message: "alert created", alert });
  } catch (error) {
    console.error("Error fetching alerts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = alertsRouter;
