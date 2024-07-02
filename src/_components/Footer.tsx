import React from 'react';
import Image from 'next/image';

function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <Image
      className="logo"
      src={`${basePath}/images/salinkaLogo.png`}
      alt="Logo de Salinka"
    />
  );
}

export default Footer;
