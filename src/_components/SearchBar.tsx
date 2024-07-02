import React from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../_components/ProductCard';
import '../styles/SearchPage.scss';

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || ''; // Récupérer le terme de recherche depuis les paramètres de l'URL

  const searchResults = [
    {
      title: 'Product 1',
      description: 'Description of Product 1',
      image: '/images/product1.jpg',
    },
    {
      title: 'Product 2',
      description: 'Description of Product 2',
      image: '/images/product2.jpg',
    },
  ];

  const filteredResults = searchResults.filter(product =>
    product.title.toLowerCase().includes(q.toLowerCase())
  );

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div>
      <h1>Résultats de recherche pour &quot;{q}&quot;</h1>
      <div className="search-results">
        {filteredResults.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={`${basePath}${product.image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
