const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world PR.");
});

app.listen(5001, () => console.log("app listening on port 5001"));
