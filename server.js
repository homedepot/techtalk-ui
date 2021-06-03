const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

const liveData = JSON.parse(fs.readFileSync("docs/jsonContracts/live.json"));
const replayData = JSON.parse(
  fs.readFileSync("docs/jsonContracts/replay.json")
);

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.get("/live/v1/nextPresentation", (req, res) => {
  res.json(liveData);
});

app.get("/replay/v1/pastPresentations", (req, res) => {
  res.json(replayData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
