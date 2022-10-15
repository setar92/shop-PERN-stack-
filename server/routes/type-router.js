import { Router } from "express";
import { create, deleteById, getAll } from '../controllers/type-controller.js';
import { checkRole } from '../middelware/role-checking.js';

const typeRouter = Router();


typeRouter.post('/', checkRole('ADMIN'),  create);
typeRouter.get('/', getAll);
typeRouter.delete('/', checkRole('ADMIN'), deleteById);

export { typeRouter };