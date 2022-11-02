const RESPONSE = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");
exports.validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    RESPONSE.Failure.Type = err.name;
    RESPONSE.Failure.Message = err.errors;
    RESPONSE.Failure.Error = StatusCode.BAD_REQUEST.message;
    return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
  }
};
