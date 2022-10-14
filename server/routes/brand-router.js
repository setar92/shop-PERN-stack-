import { Router } from "express";
import { create, deleteById, getAll } from '../controllers/brand-controller.js'

const brandRouter = Router();

brandRouter.post('/', create);
brandRouter.get('/', getAll);
brandRouter.delete('/', deleteById);


export { brandRouter };