import { Router } from "express";
import { create, deleteById, getAll } from '../controllers/brand-controller.js';
import { checkRole } from '../middelware/role-checking.js';

const brandRouter = Router();

brandRouter.post('/', checkRole('ADMIN'), create);
brandRouter.get('/', getAll);
brandRouter.delete('/', checkRole('ADMIN'), deleteById);


export { brandRouter };