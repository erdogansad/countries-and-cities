const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require("#router/router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("combined"));

server.all("/", (req, res) => res.status(200).json("Sad's API System"));
server.use("/api", router);
server.all("*", (req, res, next) => next({ status: 404, error: "not found" }));
server.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  } else {
    console.log(err);
    res
      .status(err.status || 500)
      .json({ error: err.error || "internal server error." });
  }
});

module.exports = server;
