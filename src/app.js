const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Spotify RESTful API Project is running",
    status: "success"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environmentLoaded: Boolean(process.env.SPOTIFY_CLIENT_ID)
  });
});

module.exports = app;