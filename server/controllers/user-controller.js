import { ApiError } from '../error/api-error.js';

const registration = async (req, res) => {

}

const login = async (req, res) => {
  res.json({ message: 'Work' });
}

const check = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(ApiError.badRequest('error'));
  }
  res.json({ message: 'Work' });
}

export { registration, login, check };