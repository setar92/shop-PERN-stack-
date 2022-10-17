import './module.css';
import { Col, Card, Image } from 'react-bootstrap';
import star from '../../assets/star.svg';

const DeviceItem = ({ device }) => {
  return (
    <Col md={3} className='mt-4'>
      <Card className='card'>
        <Image
          width={'150px'}
          height={'150px'}
          src={`http://localhost:5000/${device.img}`}
          className='mt-2'
        />
        <div className='d-flex justify-content-between align-items-center mt-2 p-1'>
          <div>{device.name}</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image width={'15px'} height={'15px'} src={star} />
          </div>
        </div>
      </Card>
    </Col>
  )
};

export { DeviceItem };