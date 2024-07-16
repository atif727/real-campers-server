"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("./user.model");
const user_util_1 = require("./user.util");
const config_1 = __importDefault(require("../../config/config"));
const createUserInDB = (body) => __awaiter(void 0, void 0, void 0, function* () {
    // creating user in database
    const name = body.name;
    const email = body.email;
    const jwtPayload = {
        name: name,
        email: email,
    };
    const accessToken = (0, user_util_1.createToken)(jwtPayload, config_1.default.access_secret, config_1.default.access_expires);
    const refreshToken = (0, user_util_1.createToken)(jwtPayload, config_1.default.refresh_secret, config_1.default.refresh_expires);
    const createdUser = yield user_model_1.userModel.create(body);
    return {
        createdUser,
        accessToken,
        refreshToken,
    };
});
const loggingIn = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.userModel.findOne({ email: body.email });
    if (!user || user === null || user === undefined) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is not found !");
    }
    else if (user.password !== body.password) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Password Doesn't match !");
    }
    else {
        const name = user.name;
        const email = user.email;
        const jwtPayload = {
            name: name,
            email: email,
        };
        const accessToken = (0, user_util_1.createToken)(jwtPayload, config_1.default.access_secret, config_1.default.access_expires);
        const refreshToken = (0, user_util_1.createToken)(jwtPayload, config_1.default.refresh_secret, config_1.default.refresh_expires);
        return {
            user,
            accessToken,
            refreshToken,
        };
    }
});
const getAllUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // getting all users in database for dev reasons
    const result = yield user_model_1.userModel.find();
    if (result.length === 0 || result === null || result === undefined) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No User Found");
    }
    else {
        return result;
    }
});
exports.userService = {
    createUserInDB,
    getAllUsersFromDB,
    loggingIn,
};
