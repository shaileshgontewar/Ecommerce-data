const express = require("express");
const myData = require("../Details/CardsData");

const myDataRouter = express.Router();
myDataRouter.route("/mydata").get(myData.apiController);
module.exports = myDataRouter;
