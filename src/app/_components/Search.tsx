import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainApp.scss';
import ProductCard from './ProductCard';

const products = [
  { title: 'Ray-Ban', description: 'Classic Aviator Sunglasses', image: '/images/rayban.png' },
  { title: 'Oakley', description: 'Sport Performance Sunglasses', image: '/images/oakley.png' },
  { title: 'Gucci', description: 'Fashionable Sunglasses', image: '/images/gucci.png' },
  //valeur test
];

const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState(products);

  const handleSearch = (query: string) => {
    const filteredResults = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="container">
      {/*<SearchBar onSearch={handleSearch} />*/}
      <div className="row">
        {searchResults.map((product, index) => (
          <div className="col-md-4" key={index}>
            <ProductCard
              title={product.title}
              description={product.description}
              image={`${basePath}${product.image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
