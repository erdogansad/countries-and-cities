const router = require("express").Router();
const json = require("../../../json/cities.json");

router.get("/", (req, res, next) => {
  try {
    if (req.query.state_id) {
      const state_id = req.query.state_id;
      const result = json.filter((city) => city.state_id === Number(state_id));
      res.status(200).json(result);
    } else if (req.query.state_code) {
      const state_code = req.query.state_code.toLowerCase();
      const result = json.filter(
        (city) => city.state_code.toLowerCase() === state_code
      );
      res.status(200).json(result);
    } else if (req.query.state_name) {
      const state_name = req.query.state_name.toLowerCase();
      const result = json.filter(
        (city) => city.state_name.toLowerCase() === state_name
      );
      res.status(200).json(result);
    } else {
      res
        .status(200)
        .json({ message: "state_id, state_code, or state_name required" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
