import React from 'react';
import '../../styles.scss';
import ProductCard from '../../components/ProductCard';
import 'bootstrap/scss/bootstrap.scss';
import PageLayout from '../PageLayout';
function Featured() {
  return (
    <PageLayout title="Featured Products" >
      <div className="features-container">
        <div className="features">
          <div className="title-products feature-left">
            <h1>Featured Products (test)</h1>
          </div>
        </div>
        <div className="features-products">
          {[
            { title: 'Product 1', image: '' },
            { title: 'Product 2', image: '' },
            { title: 'Product 3', image: '' },
            { title: 'Product 4', image: '' },
            { title: 'Product 5', image: '' },
            { title: 'Product 6', image: ''},
            { title: 'Product 6', image: '' },
            { title: 'Product 6', image: '' }
          ].map((product, index) => (
            <ProductCard key={index} title={product.title} description="Description" image={product.image} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default Featured;

