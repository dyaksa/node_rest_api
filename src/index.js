const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const v1WorkoutRouter = require("./v1/routes/workoutRoute");
const { urlencoded } = require("body-parser");

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log("listen on port ", PORT);
});
