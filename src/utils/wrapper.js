const data = (data, message = "", code = 200) => ({
  err: null,
  message: message,
  code: code,
  data,
});

const error = (err, message, code = 500) => ({
  err: err,
  message: message,
  code: code,
  data: null,
});

const response = (res, type, result, message, code) => {
  if (message) {
    result.message = message;
  }

  if (code) {
    result.code = code;
  }

  let status;
  switch (type) {
    case "success":
      status = true;
      break;
    case "fail":
      status = false;
      break;
    default:
      status = true;
      break;
  }

  res.status(result.code).send({
    success: status,
    data: result.data,
    message: result.message,
    code: result.code,
  });
};

module.exports = {
  error,
  data,
  response,
};
