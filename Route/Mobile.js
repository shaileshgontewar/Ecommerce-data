const express = require("express");

const mobileData = require("../Details/Mobile");

const mobileRouter = express.Router();
mobileRouter.route("/mobile").get(mobileData.apiControllor);
module.exports = mobileRouter;
