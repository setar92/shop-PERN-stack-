import { Router } from "express";
import { create, deleteById, getAll } from '../controllers/type-controller.js'

const typeRouter = Router();


typeRouter.post('/', create);
typeRouter.get('/', getAll);
typeRouter.delete('/:id', deleteById);

export { typeRouter };