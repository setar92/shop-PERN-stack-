import { Device, DaviceInfo } from '../models/models.js';
import { ApiError } from '../error/api-error.js';
import { v4 } from 'uuid';
import path from 'path';
const __dirname = path.resolve();



const create = async (req, res, next) => {
  try {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    let fileName = v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'server', 'static', fileName));
    const device = await Device.create({ name, price, brandId, brandId, typeId, img: fileName });


    if (info) {
      const infoArr = JSON.parse(info);
      infoArr.forEach(element => {
        DaviceInfo.create({
          title: element.title,
          description: element.description,
          deviceId: device.isSoftDeleted,
        })
      });
    }
    return res.json(device);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal(`unprocessed internal error: ${error.message}`));
    };
  };
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const device = await Device.findOne({ where: { id } });
    if (!device) {
      return next(ApiError.internal(`the device with this id does not exist: ${error.message}`));
    };
    const deletedDevice = await Device.destroy({ where: { id } });
    console.log(deletedDevice, 'deletedDevice');
    return res.json(deletedDevice);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal(`unprocessed internal error: ${error.message}`));
    };
  };
};

const getAll = async (req, res, next) => {
  try {
    const { typeId, brandId, limit = 9, page = 1 } = req.query;
    const offset = page * limit - limit;
    if (!typeId && !brandId) {
      const devices = await Device.findAndCountAll({ limit, offset });
      return res.json(devices);
    }
    if (typeId && !brandId) {
      const devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
      return res.json(devices);
    }
    if (!typeId && brandId) {
      const devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
      return res.json(devices);
    }
    if (typeId && brandId) {
      const devices = await Device.findAndCountAll({ where: { brandId, typeId } });
      return res.json(devices);
    };
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal(`unprocessed internal error: ${error.message}`));
    };
  };
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const device = await Device.findOne(
      {
        where: { id },
        include: [{ model: DaviceInfo, as: 'info' }]
      });
    res.json(device);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal(`unprocessed internal error: ${error.message}`));
    };
  }
}

export { create, deleteById, getAll, getById };