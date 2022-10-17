import './module.css';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Contex } from "../..";
import { Row } from 'react-bootstrap';
import { DeviceItem } from '../device-item/device-item';

const DeviceList = observer(() => {
  const { device } = useContext(Contex);
  console.log(device);

  return (
    <Row className='d-flex'>
      {device.devices.map(device =>
        <DeviceItem key={device.id} device={device} />
      )}
    </ Row>
  );
});

export { DeviceList };