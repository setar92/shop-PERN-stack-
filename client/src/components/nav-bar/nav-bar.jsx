import React from "react";
import { useContext } from "react";
import { Contex } from "../..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { routes } from '../../common/constants';
import { Link } from "react-router-dom";
import './module.css';
import { Button } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';


const NavBar = observer(() => {
  const { user } = useContext(Contex);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate(routes.LOGIN);
    user.setIsAuth(false);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={routes.SHOP} className="buyDevice">
          Buy device
        </Link>
        {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={()=>navigate(routes.ADMIN_PANEL)}>Admin panel</Button>
            <Button variant={'outline-light'} onClick={handleLogout} className="ms-2">Logout</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Login</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export { NavBar };