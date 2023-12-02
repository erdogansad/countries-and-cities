const router = require("express").Router();
const cities = require("#cities/cities.router.js");
const countries = require("#countries/countries.router.js");
const states = require("#states/states.router.js");
const get = require("#get/get.router.js");

router.use("/cities", cities);
router.use("/countries", countries);
router.use("/states", states);
router.use("/get", get);

module.exports = router;
