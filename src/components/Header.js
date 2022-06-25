import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

import { HomePage } from '../pages/HomePage';
import { PageOne } from '../pages/PageOne';
import ConnectWallet from './ConnectWallet';

export default function header() {
  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Visite</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/connectWallet">Connect Wallet</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
          <Routes>
              <Route path='/connectWallet' element={<ConnectWallet/>}/>



              
          </Routes>
      </div>
      </>
     

  )
}
