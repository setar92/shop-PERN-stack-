import React from 'react';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import { routes } from '../common/constants';


const AuthPage = () => {
  const location = useLocation();
  const isLogin = routes.LOGIN === location.pathname;

  return (
    <Container className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: '600px' }} className='p-5'>
        <h2 className="m-auto">{isLogin ? 'Login' : 'Registration'}</h2>

        <Form className="d-flex flex-column">
          <Form.Control
            placeholder='enter email'
            className='mt-3'
          />
          <Form.Control
            placeholder='enter password'
            className='mt-3'
          />
          <Row className='d-flex justify-content-between mt-3'>
            <Col>
              {isLogin ?
                <div className=''>{'No account? '}
                  <Link to={routes.REGISTRATION}>Registration</Link>
                </div>
                :
                <div>{'Have account? '}
                  <Link to={routes.LOGIN}>login</Link>
                </div>
              }
            </Col>
            <Col className='d-flex justify-content-end pe-0'>
              <Button
                variant='outline-success'
                className='me-2 align-self-end'
              >
                {isLogin ? 'Login' : 'Registration'}
              </Button>

            </Col>
          </Row>
        </Form>
      </Card>
    </Container>)
};

export { AuthPage };  