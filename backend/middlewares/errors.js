const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      errors: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };
    error.message = err.message;

    // Wrong Mongoose Object ID Error

    // Means if the user has register with an email id and if he reregister with the same id, then it would give an error as an  object id already exists with the same email id...

    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorHandler(mesage, 400);
    }

    // Handling Mongoose Validation Error

    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    // Handling mongoose duplicate key error
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      error = new ErrorHandler(message, 400);
    }

    // Handling Wrong JWT error
    if (err.name === "JsonWebTokenError") {
      const message = `Json web token is not valid. Try again`;
      error = new ErrorHandler(message, 400);
    }

    // Handling expired JWT error
    if (err.name === "TokenExpiredError") {
      const message = `Json web token is expired. Try again`;
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
