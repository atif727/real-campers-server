import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userController } from './user.controller';
import { LoginSchema, UserSchema } from './user.validation';

const router = express.Router();

// signing up for the first time
router.post('/signup', validateRequest(UserSchema), userController.createUser);
router.post('/signin', validateRequest(LoginSchema), userController.login);

// using this for dev work purposes
// confidential route so made it admin only
router.get('/users', userController.getAllUsers);

export const userRoutes = router;
