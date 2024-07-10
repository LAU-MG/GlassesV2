import React from 'react';
import './scss/Footer.scss';
import Image from 'next/image';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Image className="logo img-fluid"
               src="/images/salinkaLogo.png"
               alt="logo"
               width={100}
               height={50} />
        <p>© 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
