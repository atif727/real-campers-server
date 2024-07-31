import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { xLoginInterface, xUserInterface } from "./user.interface";
import { userModel } from "./user.model";
import { createToken } from "./user.util";
import config from "../../config/config";

const createUserInDB = async (body: xUserInterface) => {
  // creating user in database
  const name = body.name;
  const email = body.email;

  const jwtPayload = {
    name: name,
    email: email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.access_secret as string,
    config.access_expires as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.refresh_secret as string,
    config.refresh_expires as string
  );

  const createdUser = await userModel.create(body);
  return {
    createdUser,
    accessToken,
    refreshToken,
  };
};

const loggingIn = async (body: xLoginInterface) => {
  const user = await userModel.findOne({ email: body.email });
  if (!user || user === null || user === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  } else if (user.password !== body.password) {
    throw new AppError(httpStatus.NOT_FOUND, "Password Doesn't match !");
  } else {
    const name = user.name;
    const email = user.email;

    const jwtPayload = {
      name: name,
      email: email,
    };

    const accessToken = createToken(
      jwtPayload,
      config.access_secret as string,
      config.access_expires as string
    );

    const refreshToken = createToken(
      jwtPayload,
      config.refresh_secret as string,
      config.refresh_expires as string
    );
    return {
      user,
      accessToken,
      refreshToken,
    };
  }
};

const getAllUsersFromDB = async () => {
  // getting all users in database for dev reasons
  const result = await userModel.find();
  if (result.length === 0 || result === null || result === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "No User Found");
  } else {
    return result;
  }
};

const gettingUserByEmailFromDB = async (email: string) => {
  const user = await userModel.findOne({ email: email });
  if (!user || user === null || user === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  } else {
    return user;
  }
};

export const userService = {
  createUserInDB,
  getAllUsersFromDB,
  loggingIn,
  gettingUserByEmailFromDB,
};
