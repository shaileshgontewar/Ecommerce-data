const express = require("express");
const laptopData = require("../Details/Laptop");
const laptopRouter = express.Router();
laptopRouter.route("/laptop").get(laptopData.apiController);
module.exports = laptopRouter;
