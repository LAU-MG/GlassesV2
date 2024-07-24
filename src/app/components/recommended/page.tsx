'use client';

import React from 'react';
import '../../styles.scss';
import 'bootstrap/scss/bootstrap.scss';
import PageLayout from '../../components/PageLayout';
import ProductCard from '../../components/ProductCard';
import Image from 'next/image'; // Assurez-vous d'importer Image

// Définir le tableau des produits une seule fois
const products = [
  { title: 'Burnikk', image: '/images/Burnikk.png' },
  { title: 'Kibal Batal', image: '/images/Kibal_Batal.png' },
  { title: 'Very Nice', image: '/images/Very_Nice.png' },
  { title: 'Kulangot', image: '/images/Kulangot.png' },
  { title: 'Sipon Malapot', image: '/images/Sipon_Malapot.png' },
  { title: 'Pitaklan', image: '/images/Pitaklan.png' },
];

function Recommended() {
  return (
    <PageLayout
      title="Recommended Products"
      heroImage="/images/hero-section.png"
      heroImageWidth={600}
      heroImageHeight={400}
    >
        <div className="col-md-11 mx-auto">
          <div className="title-products recommended-left">
            <h2><strong>Recommended Products</strong></h2>

        </div>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <ProductCard
                title={product.title}
                description="Description"
                image={product.image}
                width={190}
                height={200}
              />
            </div>
          ))}
        </div>
        </div>
    </PageLayout>
  );
}

export default Recommended;
