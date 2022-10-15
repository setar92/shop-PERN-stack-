import { Brand } from '../models/models.js';
import { ApiError } from '../error/api-error.js';

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
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
    const brand = await Brand.findOne({ where: { id } });
    if (!brand) {
      return next(ApiError.badRequest('the brand with this id does not exist'));
    };
    const deletedBrand = await Brand.destroy({ where: { id } });
    return res.json(deletedBrand);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  };
};

const getAll = async (req, res, next) => {
  try {
    const brands = await Brand.findAll();
    return res.json(brands);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  };
};

export { create, deleteById, getAll };