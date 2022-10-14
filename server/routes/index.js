import { Router } from "express";
import { brandRouter } from './brand-router.js';
import { deviceRouter } from './device-router.js';
import { typeRouter } from './type-router.js';
import { userRouter } from './user-router.js';


const router = Router();


router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/type', typeRouter);

export { router };