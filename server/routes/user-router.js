import { Router } from "express";
import { registration, login, check } from '../controllers/user-controller.js';
import { checkAuth } from '../middelware/auth-checking.js';

const userRouter = Router();


userRouter.post('/registration', registration);
userRouter.post('/login', login);
userRouter.get('/auth', checkAuth, check);

export { userRouter };