const ErrorHandler = require('../utils/Error');

module.exports = (err, req, res, next) => {
    err.message = err.message || 'Something went wrong';
    err.statuscode = err.statuscode || 500;

    if (err.name === "CastError") {
        const message = "Invalid ID format";
        err = new ErrorHandler(message, 400);
    }

    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        err = new ErrorHandler(message, 400);
    }

    if (err.name === "JsonWebTokenError") {
        const message = "Invalid token, please log in again";
        err = new ErrorHandler(message, 401);
    }

    if (err.name === "TokenExpiredError") {
        const message = "Token has expired, please log in again";
        err = new ErrorHandler(message, 401);
    }

    res.status(err.statuscode).json({
        success: false,
        message: err.message
    });
};
