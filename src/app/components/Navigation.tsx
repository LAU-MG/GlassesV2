'use client';

import Link from 'next/link';
import React from 'react';
import './scss/Navigation.scss';

function Navigation() {
  return (
    <div className='nav-container'>
      <div className='menu d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <nav className='nav d-flex'>
          <div className='nav-item'>
            <Link href='../../' className='link'>
              Home
            </Link>
          </div>
          <div className='nav-item'>
            <Link href='../components/shop/' className='link'>
              Shop
            </Link>
          </div>
          <div className='nav-item'>
            <Link href='../components/featured/' className='link'>
              Featured
            </Link>
          </div>
          <div className='nav-item'>
            <Link href='../components/recommended/' className='link'>
              Recommended
            </Link>
          </div>
        </nav>

        <div className='d-flex justify-content-end align-items-center'>
          <div className='d-inline-flex align-items-center'>
            <div className='d-flex justify-content-end ml-auto'></div>
            <div className='Shopping-btn mx-2'></div>
            <button className='btn btn-up mx-2'>Sign Up</button>
            <button className='btn btn-in'>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
