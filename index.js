const express = require("express");
const app = express();
const cors = require("cors");
const mobile = require("./Route/Mobile");
const data = require("./Details/CardsData");
const data1 = require("./Details/mobile.json");

const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello E-commerce");
});
app.get("/data", (req, res) => {
  res.send(data);
});
app.get("/data1", (req, res) => {
  res.send(data1);
});

app.use("/api", mobile);

app.listen(port, () => {
  console.log(`app is running ${port}`);
});
