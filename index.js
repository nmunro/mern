const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write(JSON.stringify({"msg": "Hello World"}));
  res.send();
});

app.listen(5000, () => {
  console.log("Online");
});
