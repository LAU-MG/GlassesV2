// pages/recommended/page.tsx
'use client';

import React from 'react';
import '../../styles.scss';
import 'bootstrap/scss/bootstrap.scss';
import PageLayout from '../../components/PageLayout';
import ProductCard from '../../components/ProductCard';
import Image from 'next/image';

function Recommended() {
  return (
    <PageLayout title="Recommended Products" >
      <div className="recommended-container">
        <div className="recommended">
          <div className="title-products recommended-left">
            <h3>Recommended Products</h3>
          </div>
        </div>
        <div className="recommended-products">
          {[
            { title: 'Product 1', image: '' },
            { title: 'Product 2', image: '' },
            { title: 'Product 3', image: '' },
            { title: 'Product 4', image: '' },
            { title: 'Product 5', image: '' },
            { title: 'Product 6', image: '' }
          ].map((product, index) => (
            <ProductCard key={index} title={product.title} description="Description" image={product.image} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default Recommended;
