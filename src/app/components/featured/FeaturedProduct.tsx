import React from 'react';
import ProductList from './../ProductList';

const featuredProducts = [
  { title: 'Burnikk', description: 'Description', image: '/images/Burnikk.png', width: 200, height: 180 },
  { title: 'Kibal Batal', description: 'Description', image: '/images/Kibal_Batal.png', width: 200, height: 180 },
  { title: 'Very Nice', description: 'Description', image: '/images/Very_Nice.png', width: 200, height: 180 },
  { title: 'Buldit', description: 'Description', image: '/images/Buldit.png', width: 200, height: 180 },
  { title: 'Balakubak', description: 'Description', image: '/images/Balakubak.png', width: 200, height: 180 },
  { title: 'Tikitilao Manok', description: 'Description', image: '/images/Tiktilaok_Manok.png', width: 200, height: 180 },
  { title: 'Kutu', description: 'Description', image: '/images/Kutu.png', width: 200, height: 180 },
  { title: 'Quake Overload', description: 'Description', image: '/images/Quake_Overload.png', width: 200, height: 180 }
];

const FeaturedProducts: React.FC = () => {
  return <ProductList title='Featured Products' products={featuredProducts} link='/components/featured/' />;
};

export default FeaturedProducts;
