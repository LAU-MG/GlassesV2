import React from 'react';
import './styles.scss';
import 'bootstrap/scss/bootstrap.scss';
import Link from 'next/link';
import PageLayout from './components/PageLayout';
import FeaturedProducts from './components/featured/FeaturedProduct';
import RecommendedProducts from './components/recommended/RecommendedProduct';

function App() {
  return (
    <PageLayout
      title="See everything with Clarity"
      heroImage="/images/hero-section.png"
      heroImageWidth={600}
      heroImageHeight={400}
      text="Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered."
      button={{ href: '/components/shop', label: 'Shop Now' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
          </div>
        </div>
      </div>

      <FeaturedProducts />
      <RecommendedProducts />
    </PageLayout>
  );
}

export default App;
