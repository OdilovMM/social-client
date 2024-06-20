const AppError = require("./appError");

function joiValidation(schema) {
  return async (req, res, next) => {
    console.log('joi validation:',req.body)
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error && error.details) {
      return next(new AppError(error.details[0].message, 400));
    }
    next();
  };
}

module.exports = {
  joiValidation,
};
