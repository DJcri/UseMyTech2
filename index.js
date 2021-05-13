require("dotenv").config();

const path = require("path");
const express = require("express");

const server = require("./api/server");

const port = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname, "client/build")));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(port, () => {
  console.log("listening on " + port);
});
