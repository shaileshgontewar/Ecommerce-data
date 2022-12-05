const express = require("express");
const app = express();
const cors = require("cors");
const mobile = require("./Route/Mobile");
const laptop = require("./Route/Laptop");
const myData = require("./Route/MyData");
const data = require("./Details/CardsData");
const data1 = require("./Details/mobile.json");

const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send(" <h2>Welcome to E-commerce Data </h2>");
});

app.use("/", laptop);
app.use("/", myData);
app.use("/", mobile);

app.listen(port, () => {
  console.log(`app is running ${port}`);
});
