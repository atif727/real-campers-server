import { RequestHandler } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { xLoginInterface, xUserInterface } from "./user.interface";
import catchAsync from "../../utils/catchAsync";
import config from "../../config/config";

const createUser: RequestHandler = catchAsync(async (req, res) => {
  // taking body of the request
  const body: xUserInterface = req.body;
  const result = await userService.createUserInDB(body);

  const { refreshToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: `User registered successfully`,
    data: result,
  });
});

const login: RequestHandler = catchAsync(async (req, res) => {
  const body: xLoginInterface = req.body;

  const result = await userService.loggingIn(body);
  const { refreshToken } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: `User logged in successfully`,
    data: result,
  });
});

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
  // getting all user for dev purposes
  const result = await userService.getAllUsersFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: `Users shown successfully`,
    data: result,
  });
});

const getUsersByEmail: RequestHandler = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await userService.gettingUserByEmailFromDB(email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: `Users shown successfully`,
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUsers,
  login,
  getUsersByEmail,
};
