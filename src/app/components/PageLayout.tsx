// components/PageLayout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';

interface PageLayoutProps {
  title: string;
  heroImage?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, heroImage, heroImageWidth, heroImageHeight, children }) => {
  return (
    <div className="App">
      <Header />
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="column-container">
                <div className="column-left">
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
            {heroImage && heroImageWidth && heroImageHeight && (
              <div className="col-md-6">
                <div className="column-container">
                  <Image
                    className="float-md-end"
                    src={heroImage}
                    alt="hero image"
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
