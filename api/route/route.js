const express = require('express');
const router = express.Router();
const { generateAnnualCalendar } = require("../handler/handler");

router.get('/', generateAnnualCalendar);

module.exports = { routeAPI: router };
