const router = require("express").Router();
const states = require("../../../json/states.json");
const countries = require("../../../json/countries.json");
const cities = require("../../../json/cities.json");

router.get("/", (req, res, next) => {
  try {
    let result = {};
    if (req.query.city_id) {
      let city = cities.find((city) => city.id === Number(req.query.city_id));
      result.city = city[0];
    }
    if (req.query.state_id) {
      let state = states.find(
        (state) => state.id === Number(req.query.state_id)
      );
      result.state = state[0];
    }
    if (req.query.country_id) {
      let country = countries.find(
        (country) => country.id === Number(req.query.country_id)
      );
      result.country = country[0];
    }
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});
