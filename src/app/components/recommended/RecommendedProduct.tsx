import React from 'react';
import ProductList from './../ProductList';

const recommendedProducts = [
  { title: 'Burnikk', description: 'Description', image: '/images/Burnikk.png' },
  { title: 'Kibal Batal', description: 'Description', image: '/images/Kibal_Batal.png' },
  { title: 'Very Nice', description: 'Description', image: '/images/Very_Nice.png' },
  { title: 'Kulangot', description: 'Description', image: '/images/Kulangot.png' },
  { title: 'Sipon Malapot', description: 'Description', image: '/images/Sipon_Malapot.png' },
  { title: 'Pitaklan', description: 'Description', image: '/images/Pitaklan.png' },
];

const RecommendedProducts = () => {
  return <ProductList title="Recommended Products" products={recommendedProducts} link="/components/recommended/" />;
};

export default RecommendedProducts;
