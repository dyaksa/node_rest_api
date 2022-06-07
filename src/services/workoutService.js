const { v4: uuid } = require("uuid");

const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  return;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = (payload) => {
  const workoutInsert = {
    ...payload,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutInsert);
  return createdWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
