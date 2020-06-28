const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const got = require("got");

const backend2Url = `http://${process.env.BACKEND_2_HOST || "localhost"}:${process.env.BACKEND_2_PORT || "5001"}`;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello from backend 1.");
});

app.get("/passthrough", (req, res) => {
  callBackend2().then((result) => {
    res.send(`got ${result} from backend 2`);
  });

  //res.send("hello from backend 1.");
});

app.listen(5000, () => console.log("app listening on port 5000"));

async function callBackend2() {
  try {
    const result = await got(backend2Url);
    return result.body;
  } catch (error) {
    console.log(error.response.body);
  }
}
