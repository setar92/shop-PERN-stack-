import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeBar } from '../components/type-bar/type-bar';
import { BrandBar } from '../components/brand-bar/brand-bar';
import { DeviceList } from '../components/device-list/device-list';

const ShopPage = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export { ShopPage };