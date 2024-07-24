import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Link from 'next/link';

interface PageLayoutProps {
  title: string;
  heroImage?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  children: React.ReactNode;
  text?: string;
  button?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  heroImage,
  heroImageWidth,
  heroImageHeight,
  children,
  text,
  button
}) => {
  return (
    <div className='App'>
      <Header />
      <div className='hero-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='column-container'>
                <div className='column-left'>
                  <h1>{title}</h1>
                  <p>{text}</p>
                  {button && (
                    <Link href={button.href}>
                      <button className='hero-button'>{button.label}</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {heroImage && heroImageWidth && heroImageHeight && (
              <div className='col-md-6'>
                <div className='column-container'>
                  <Image
                    className='float-md-end'
                    src={heroImage}
                    alt='hero image'
                    width={heroImageWidth}
                    height={heroImageHeight}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
