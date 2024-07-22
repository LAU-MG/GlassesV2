import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col-md-2 text-center">
            <a href="../../" className="logo-container">
              <Image className="logo img-fluid" src="/images/salinkaLogo.png" alt="logo" width={150} height={50}/>
            </a>
          </div>
          <div className="col-md-12 col-lg-9">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
