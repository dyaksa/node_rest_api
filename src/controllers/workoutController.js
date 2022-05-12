const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const getAllWorkouts = workoutService.getAllWorkouts();
  return res.send("get all workouts");
};

const getOneWorkout = (req, res) => {
  const getOneWorkout = workoutService.getOneWorkout();
  return res.send("get one workout");
};

const createNewWorkout = (req, res) => {
  const createNewWorkout = workoutService.createNewWorkout();
  return res.send("create new workout");
};

const updateOneWorkout = (req, res) => {
  const updateOneWorkout = workoutService.updateOneWorkout();
  return res.send("update one workout");
};

const deleteOneWorkout = (req, res) => {
  const deleteOneWorkout = workoutService.deleteOneWorkout();
  return res.send("delete one workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
