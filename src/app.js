const { join } = require("path");
const express = require("express");
const router = require('./routes/index')
require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, "..", "public")));
app.use(router);
app.use((req, res) => {
  res.status(404).json({ message: "This page is not found!" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error" });
});
module.exports = app;
