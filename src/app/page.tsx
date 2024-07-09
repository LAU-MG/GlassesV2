// pages/page.tsx
import React from 'react';
import './styles.scss';
import ProductCard from './components/ProductCard';
import 'bootstrap/scss/bootstrap.scss';
import Link from "next/link";
import PageLayout from './components/PageLayout';

function App() {
  return (
    <PageLayout
      title="See everything with Clarity"
      heroImage="/images/hero-section.png"
      heroImageWidth={600}
      heroImageHeight={400}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
            <div className="column-container">
              <Link href="/components/shop/">
                <button className="shop-now-btn">
                  Shop Now <i className="ri-arrow-right-s-line">
                    <span role="img" aria-label="arrow-right" className="anticon anticon-arrow-right">
                      <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                      </svg>
                    </span>
                </i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="features-container container">
        <div className="features">
          <div className="row align-items-center">
            <div className="title-products col-md-8 d-flex justify-content-end">
              <h3 className="fw-bold">Featured Products</h3>
            </div>
          </div>
          <div className="see-all-link col-md-6 d-flex justify-content-end fw-bold">
            <Link href="/components/featured/">See All</Link>
          </div>
        </div>
        <div className="row">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="col-md-4">
              <ProductCard title={`Product ${i + 1}`} description="Description" image="" />
            </div>
          ))}
        </div>
      </div>

      <div className="features-container container">
        <div className="features">
          <div className="row align-items-center">
            <div className="title-products col-md-8 d-flex justify-content-end">
              <h3 className="fw-bold">Recommended Products</h3>
            </div>
          </div>
          <div className="see-all-link col-md-6 d-flex justify-content-end fw-bold">
            <Link href="/components/recommended/">See All</Link>
          </div>
        </div>
        <div className="row">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="col-md-4">
              <ProductCard title={`Product ${i + 1}`} description="Description" image="" />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
