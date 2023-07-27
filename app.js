require("dotenv/config");
require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
require("./config")(app);

// 👇 routes here
const alertsRouter = require("./routes/alerts.routes");
app.use("/api", alertsRouter);

// Auth routes
const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);
require("./error-handling")(app);

module.exports = app;
