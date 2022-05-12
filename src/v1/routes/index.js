const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  return res.status(200).send({
    baseUrl: req.baseUrl,
    message: "Hello World",
    versioning: "v1",
  });
});

module.exports = router;
