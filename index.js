const express = require("express");
const app = express();
const cors = require("cors");
const mobile = require("./Route/Mobile");
const { application } = require("express");
const port = 3000;
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello E-commerce");
});

app.use("/api", mobile);
app.listen(port, () => {
  console.log(`app is running ${port}`);
});
