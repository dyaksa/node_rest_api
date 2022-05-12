const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send({
    message: "hello world",
  });
});

router.get("/:workoutId", (req, res) => {
  return res.status(200).send({
    message: "get by id",
  });
});

router.post("/", (req, res) => {
  return res.status(200).send({
    message: "post",
  });
});

router.patch("/:workoutId", (req, res) => {
  return res.status(200).send({
    message: "patch",
  });
});

router.delete("/:workoutId", (req, res) => {
  return res.status(200).send({
    message: "delete",
  });
});

module.exports = router;
