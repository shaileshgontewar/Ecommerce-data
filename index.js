const express = require("express");
const app = express();
const cors = require("cors");
const mobile = require("./Route/Mobile");
const laptop = require("./Route/Laptop");
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
app.get("/api", (req, res) => {
  res.send(data1);
});
app.use("/", laptop);
app.use("/api", mobile);

app.listen(port, () => {
  console.log(`app is running ${port}`);
});
