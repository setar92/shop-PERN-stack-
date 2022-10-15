import { Type } from '../models/models.js';
import { ApiError } from '../error/api-error.js';

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  };
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('you should to indicate id'));
    };
    const type = await Type.findOne({ where: { id } });
    if (!type) {
      return next(ApiError.badRequest('the type with this id does not exist'));
    };
    const deletedType = await Type.destroy({ where: { id } });
    return res.json(deletedType);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  };
};

const getAll = async (req, res, next) => {
  try {
    const types = await Type.findAll();
    return res.json(types);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  };
};


export { create, deleteById, getAll };