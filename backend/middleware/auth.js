const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// isLoggedIn
exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const token = req.cookies.token; 
  
    if (!token) {
      return next(new ErrorHandler("Please login to access the resource", 401));
    }
  
    try {
      const decodeData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodeData.id);
      next();
    } catch (err) {
      return next(new ErrorHandler("Invalid token, please login again", 401));
    }
  });


//isAdminLoggedin
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
