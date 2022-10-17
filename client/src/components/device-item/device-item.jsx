import './module.css';
import { Col, Card, Image } from 'react-bootstrap';
import star from '../../assets/star.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../common/constants';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`${routes.DEVICE}/${device.id}`);
  }
  return (
    <Col md={3} className='mt-4' onClick={handleCardClick}>
      <Card className='card'>
        <Image
          width={'150px'}
          height={'150px'}
          src={`http://localhost:5000/${device.img}`}
          className='mt-2'
        />
        <div className='d-flex justify-content-between align-items-center mt-2 p-1 text-black-50'>
          <div>{'Some device...'}</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image width={'15px'} height={'15px'} src={star} />
          </div>
        </div>
        <div className='p-1'>{device.name}</div>

      </Card>
    </Col>
  )
};

export { DeviceItem };