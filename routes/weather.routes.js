const express = require("express");
const weatherRouter = express.Router();
const dotenv = require("dotenv");
dotenv.config();

weatherRouter.get("/get-api-key", (req, res) => {
  const apiKey = process.env.API_KEY;
  res.json({ apiKey });
});

module.exports = weatherRouter;
