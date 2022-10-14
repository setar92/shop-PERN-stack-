import { Router } from "express";
import { create, deleteById, getAll, getById } from '../controllers/device-controller.js'

const deviceRouter = Router();

deviceRouter.post('/', create);
deviceRouter.get('/', getAll);
deviceRouter.delete('/:id', deleteById);
deviceRouter.get('/:id', getById);

export { deviceRouter };