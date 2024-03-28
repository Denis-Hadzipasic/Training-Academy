const User = require("../models/user-modelsjs");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncWrapper = require("../utils/asyncWrapper.js");

const createUser = asyncWrapper(async (req, res, next) => {
  const {
    email,
    password,
    firstName,
    lastName,
    role,
    dateOfRegistration,
    status,
  } = req.body;

  const findUser = await User.findOne({ email });

  if (findUser) {
    throw new ErrorResponse(409, "User already exists!");
  }

  const user = await User.create({
    email,
    password,
    firstName,
    lastName,
    role,
    dateOfRegistration,
    status,
  });

  res.status(201).json(user);
});

module.exports = {
  createUser,
};
