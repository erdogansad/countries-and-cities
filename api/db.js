var cities = require("./json/cities.json");
var countries = require("./json/countries.json");
var states = require("./json/states.json");

module.exports = function () {
  return {
    cities: cities.cities,
    countries: countries.countries,
    states: states.states,
  };
};
