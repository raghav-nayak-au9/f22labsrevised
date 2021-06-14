// check if user is authenticated and
const User = require("../models/userModel");
const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
//Setting up config file
dotenv.config({ path: "backend/config/config.env" });
const jwtsecret = process.env.JWT_SECRET;

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login First to access the resource..", 401));
  }

  const decoded = jwt.verify(token, jwtsecret);
  req.user = await User.findById(decoded.id);
  next();
});
