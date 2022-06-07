const workoutService = require("../services/workoutService");
const validate = require("../validator/workoutValidate");
const validator = require("../utils/validator");
const wrappper = require("../utils/wrapper");

const getAllWorkouts = async (req, res) => {
  const postRequest = async () => {
    const getAllWorkouts = workoutService.getAllWorkouts();
    return getAllWorkouts;
  };

  const sendResponse = async (result) => {
    if (result.err) {
      return wrappper.response(res, "fail", result);
    } else {
      return wrappper.response(res, "success", result);
    }
  };

  sendResponse(await postRequest());
};

const getOneWorkout = (req, res) => {
  const getOneWorkout = workoutService.getOneWorkout();
  return res.send("get one workout");
};

const createNewWorkout = async (req, res) => {
  const payload = req.body;
  const validationPayload = validator.isValidate(
    validate.createWorkoutSchema,
    payload
  );
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return workoutService.createNewWorkout(result.data);
  };

  const sendResponse = async (result) => {
    if (result.err) {
      return wrappper.response(res, "fail", result);
    } else {
      return wrappper.response(res, "success", result);
    }
  };

  sendResponse(await postRequest(validationPayload));
};

const updateOneWorkout = (req, res) => {
  const payload = req.body;

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
