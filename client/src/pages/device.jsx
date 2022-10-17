import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/big-star.svg';
import './page.css';

const DevicePanel = () => {
  const device = { id: 4, name: 'Iphone 11', price: 22000, rating: 5, img: '590946d0-279b-4b02-ba77-5565959c8257.jpg' };
  const descriptions = [
    { id: 1, title: 'Memory', description: '32hb' },
    { id: 2, title: 'Camera', description: '15MPx' },
    { id: 3, title: 'Processor', description: 'intel I7' },
    { id: 4, title: 'Core count', description: '8' },
    { id: 5, title: 'Battery', description: '4000' },
  ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image
            width={'300px'}
            height={'300px'}
            src={`http://localhost:5000/${device.img}`}
          />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
            <div className='d-flex align-items-center justify-content-center rating'
              style={{
                background: `url(${bigStar}) no-repeat center center`, width: '260px', height: '240px',
                backgroundSize: 'cover'
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex flex-column align-items-center justify-content-around cardDevice'>
            <h3>{'From: ' + device.price + ' UAN.'}</h3>

            <Button variant='outline-dark'>
              Add to basket
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className={'d-flex flex-column m-3'}>
        <h1>Characteristics</h1>
        {descriptions.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '4px'}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>

    </Container>)
};

export { DevicePanel };