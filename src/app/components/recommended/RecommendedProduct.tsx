import React from 'react';
import ProductList from './../ProductList';

const recommendedProducts = [
  { title: 'Burnikk', description: 'Description', image: '', width: 200, height: 180  },
  { title: 'Kibal Batal', description: 'Description', image: '/images/Kibal_Batal.png', width: 200, height: 180  },
  { title: 'Very Nice', description: 'Description', image: '/images/Very_Nice.png',width: 200, height: 180  },
  { title: 'Kulangot', description: 'Description', image: '/images/Kulangot.png', width: 200, height: 180  },
  { title: 'Sipon Malapot', description: 'Description', image: '/images/Sipon_Malapot.png',width: 200, height: 180  },
  { title: 'Pitaklan', description: 'Description', image: '/images/Pitaklan.png', width: 200, height: 180  },
];

const RecommendedProducts = () => {
  return <ProductList title="Recommended Products" products={recommendedProducts} link="/components/recommended/" />;
};

export default RecommendedProducts;
