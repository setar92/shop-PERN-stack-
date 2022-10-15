import { ApiError } from '../error/api-error.js';
import bcrypt from 'bcrypt';
import { User, Basket } from '../models/models.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h' })
};


const registration = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('not correct email or password'));
    };
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('user with such email already exist'));
    };
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword, role });
    await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest('bad request'));
    };
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest('bad request'));
    };
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  };
};

const check = async (req, res, next) => {
  try {
    const { id, email, role } = req.user;
    const token = generateJwt(id, email, role);
    res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal('unprocessed internal error'));
    };
  };
};

export { registration, login, check };