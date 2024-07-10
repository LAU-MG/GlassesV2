// pages/recommended/page.tsx
'use client';

import React from 'react';
import '../../styles.scss';
import 'bootstrap/scss/bootstrap.scss';
import PageLayout from '../../components/PageLayout';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';

// Définir le tableau des produits une seule fois
const products = [
  { title: 'Burnikk', image: '/images/Burnikk.png' },
  { title: 'Kibal Batal', image: '/images/Kibal_Batal.png' },
  { title: 'Very Nice', image: '/images/Very_Nice.png' },
  { title: 'Kulangot', image: '/images/Kulangot.png' },
  { title: 'Sipon Malapot', image: '/images/Sipon_Malapot.png' },
  { title: 'Pitaklan', image: '/images/Pitaklan.png' },
  { title: 'Lunettes Noires', image: '/images/Lunettes_Noires.png' },
  { title: 'Lunettes de Soleil', image: '/images/Lunettes_de_Soleil.png' },
  { title: 'Lunettes de Vue', image: '/images/Lunettes_de_Vue.png' },
];

function Recommended() {
  return (
    <PageLayout title="Recommended Products">
      <div className="recommended-container">
        <div className="recommended">
          <div className="title-products recommended-left">
            <h3>Recommended Products</h3>
          </div>
        </div>
        <div className="recommended-products">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description="Description"
              image={product.image}
              width={200}
              height={180}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default Recommended;
