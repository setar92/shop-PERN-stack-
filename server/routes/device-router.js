import { Router } from "express";
import { create, deleteById, getAll, getById } from '../controllers/device-controller.js'
import { checkRole } from '../middelware/role-checking.js';

const deviceRouter = Router();

deviceRouter.post('/', checkRole('ADMIN'), create);
deviceRouter.get('/', getAll);
deviceRouter.delete('/:id', checkRole('ADMIN'), deleteById);
deviceRouter.get('/:id', getById);

export { deviceRouter };