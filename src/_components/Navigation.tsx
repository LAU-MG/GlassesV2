'use client';

import React from 'react';
import { Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ShoppingBasket from './ShoppingBasket';
import '../styles/Navigation.scss';

const Navigation: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="nav-container">
      <Nav className="menu flex-column flex-md-row justify-content-between align-items-center">
        <nav className="nav">
          <div className="nav-item">
            <a href={`${basePath}/`} className="link">Home</a>
          </div>
          <div className="nav-item">
            <a href={`${basePath}/shop/`} className="link">Shop</a>
          </div>
          <div className="nav-item">
            <a href={`${basePath}/featured/`} className="link">Featured</a>
          </div>
          <div className="nav-item">
            <a href={`${basePath}/recommended/`} className="link">Recommended</a>
          </div>
        </nav>

        <div className="d-flex justify-content-end">
          <Nav.Item>
            <div className="d-inline-flex align-items-center">
              <div className="d-flex justify-content-end ml-auto">
                <SearchBar />
              </div>
              <div className="Shopping-btn">
                <ShoppingBasket />
              </div>
              <button className="btn-btn-up mx-2">Sign Up</button>
              <button className="btn-btn-in">Sign In</button>
            </div>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
}

export default Navigation;
