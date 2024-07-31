"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
// signing up for the first time
router.post('/signin', (0, validateRequest_1.default)(user_validation_1.LoginSchema), user_controller_1.userController.login);
router.post('/signup', (0, validateRequest_1.default)(user_validation_1.UserSchema), user_controller_1.userController.createUser);
// using this for dev work purposes
// confidential route so made it admin only
router.get('/users', user_controller_1.userController.getAllUsers);
router.get('/users/:email', user_controller_1.userController.getUsersByEmail);
exports.userRoutes = router;
