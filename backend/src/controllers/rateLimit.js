const rateLimit = require("express-rate-limit");


const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message:
    "Too many accounts created from this IP, please try again after an hour"
});

const loginAccountLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // start blocking after 5 requests
  message: {
    error: "Too many tries from this IP, please try again after 15 minutes"
  }

});

export default loginAccountLimiter;
