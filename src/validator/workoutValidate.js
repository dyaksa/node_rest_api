const joi = require("joi");

module.exports = {
  createWorkoutSchema: joi.object({
    name: joi.string().required(),
    mode: joi.string().required(),
    equipment: joi.string().required(),
    trainerTips: joi.string().required(),
  }),
};
