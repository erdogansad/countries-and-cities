const router = require("express").Router();
const json = require("../../../json/states.json");

router.get("/", (req, res, next) => {
  try {
    if (req.query.id) {
      const id = req.query.id;
      const result = json.filter((state) => state.id === Number(id));
      res.status(200).json(result);
    } else if (req.query.country_code) {
      const country_code = req.query.country_code.toLowerCase();
      const result = json.filter(
        (state) => state.country_code.toLowerCase() === country_code
      );
      res.status(200).json(result);
    } else if (req.query.country_id) {
      const country_id = req.query.country_id;
      const result = json.filter(
        (state) => state.country_id === Number(country_id)
      );
      res.status(200).json(result);
    } else if (req.query.country_name) {
      const country_name = req.query.country_name.toLowerCase();
      const result = json.filter(
        (state) => state.country_name.toLowerCase() === country_name
      );
      res.status(200).json(result);
    } else if (req.query.state_code) {
      const state_code = req.query.state_code.toLowerCase();
      const result = json.filter(
        (state) => state.state_code.toLowerCase() === state_code
      );
      res.status(200).json(result);
    } else {
      res.status(200).json({ message: "Please provide a query string." });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
