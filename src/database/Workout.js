const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

module.exports = {
  getAllWorkouts: () => {
    return {
      err: null,
      message: "Get data workout success",
      code: 200,
      data: DB.workouts,
    };
  },

  createNewWorkout: (newWorkout) => {
    const isAlreadyExist =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyExist) {
      return {
        err: "fail",
        message: "Data Duplicate",
        data: null,
        code: 500,
      };
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return {
      data: newWorkout,
      code: 200,
      err: null,
      message: "success saved data",
    };
  },
};
