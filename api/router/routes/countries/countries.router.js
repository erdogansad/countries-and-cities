const router = require("express").Router();
const json = require("../../../json/countries.json");

router.get("/", (req, res, next) => {
  try {
    if (req.query.id) {
      const id = req.query.id;
      const result = json.filter((country) => country.id === Number(id));
      res.status(200).json(result);
    } else if (req.query.name) {
      const name = req.query.name.toLowerCase();
      const result = json.filter(
        (country) => country.name.toLowerCase() === name
      );
      res.status(200).json(result);
    } else if (req.query.iso2) {
      const iso2 = req.query.iso2.toLowerCase();
      const result = json.filter(
        (country) => country.iso2.toLowerCase() === iso2
      );
      res.status(200).json(result);
    } else if (req.query.region) {
      const region = req.query.region.toLowerCase();
      const result = json.filter(
        (country) => country.region.toLowerCase() === region
      );
      res.status(200).json(result);
    } else {
      const result = json.map((country) => {
        return {
          id: country.id,
          name: country.name,
          iso2: country.iso2,
          region: country.region,
          translations: country.translations,
        };
      });
      res.status(200).json(result);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
