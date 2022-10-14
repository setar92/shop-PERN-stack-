import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './db.js';
import { User, Basket, BasketDevice, Rating, Type, Brand, Device, DaviceInfo } from './models/models.js';
import cors from 'cors';
dotenv.config();
import { router } from './routes/index.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, console.log(`Server is running on port ${PORT}`))
  } catch (error) {
    console.log(error.message);
  }
}

start();





