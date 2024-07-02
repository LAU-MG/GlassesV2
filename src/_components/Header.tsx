import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col-md-2 text-center">
            <a href={`${basePath}/`} className="logo-container">
              <Image className="logo img-fluid" src={`${basePath}/images/salinkaLogo.png`} alt="logo" width={200} height={100} />
            </a>
          </div>
          <div className="col-md-12 col-lg-9">
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href={`${basePath}/home`}>Home</Nav.Link>
                  <Nav.Link href={`${basePath}/about`}>About</Nav.Link>
                  <Nav.Link href={`${basePath}/contact`}>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

