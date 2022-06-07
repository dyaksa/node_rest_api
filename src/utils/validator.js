const validate = require("validate.js");
const wrapper = require("./wrapper");

const isValidate = (schema, payload) => {
  const { value, error } = schema.validate(payload);
  if (!validate.isEmpty(error)) {
    return wrapper.error("fail", "Unprocessable Entity", 422);
  }
  return wrapper.data(value, "success", 200);
};

module.exports = {
  isValidate,
};
