const express = require("express");
const Alerts = require("../models/Alerts.model");
const alertsRouter = express.Router();

// Getting alerts from the database
alertsRouter.get("/alerts", async (req, res) => {
  try {
    const alerts = await Alerts.find().populate("createdBy").sort("createdBy");
    res.json(alerts);
  } catch (error) {
    console.error("Error fetching alerts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Creating new alerts to the database
alertsRouter.post("/alerts", async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const alert = await Alerts.create({
      message: body.message,
      dangerLevel: body.dangerLevel,
      createdBy: body.createdBy,
      status: "pending",
    });
    console.log(alert);
    res.json({ message: "Alert created", alert });
  } catch (error) {
    console.error("Error fetching alerts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Updating the status of alerts
alertsRouter.put("/alerts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const alert = await Alerts.findByIdAndUpdate(id, { status }, { new: true });
    console.log("Updated alert:", alert);
    res.json(alert);
  } catch (error) {
    console.error("Error updating alert status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

alertsRouter.delete("/alerts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Alerts.findByIdAndRemove(id);
    console.log("Deleted alert:", id);
    res.json({ message: "Alert deleted" });
  } catch (error) {
    console.error("Error deleting alert:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = alertsRouter;
