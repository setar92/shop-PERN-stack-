import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const checkRole = (role) => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    };
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        res.status(401).json({ message: 'user is not authorized' });
      };
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: 'You do not have enough permissions to perform this action.' });
      };
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'user is not authorized' });
    };
  };
};

export { checkRole };