import { Router } from "express";
import { registration, login, check } from '../controllers/user-controller.js'

const userRouter = Router();


userRouter.post('/registration', registration);
userRouter.post('/login', login);
userRouter.get('/auth', check);

export { userRouter };