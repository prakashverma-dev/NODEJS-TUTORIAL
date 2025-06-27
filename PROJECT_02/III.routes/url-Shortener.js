
const express = require("express")

const urlRouter = express.Router();

// const auth = require('../0.middlewares/basicAuth'); //To use the service of site you need to login.

const {handleGenerateShortenerID, reDirectToURL, handleGetAnalytics} = require("../II.controllers/url-Shortener");



urlRouter.post("/", handleGenerateShortenerID); //for creating the url shortener ID for each entered website
urlRouter.get("/:shortID", reDirectToURL);
urlRouter.get("/analytics/:shortID", handleGetAnalytics);


module.exports = {urlRouter};

// console.log("ALL OKKKK");