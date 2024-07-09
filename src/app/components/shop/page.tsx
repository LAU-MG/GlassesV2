'use client'

import React from 'react';
import '../../styles.scss';
import Header from '../../components/Header';
import 'bootstrap/scss/bootstrap.scss';

function Featured() {
  return (
    <div className="App">
      <Header />
      <ProductCardList />
    </div>
  );
}

function ProductCardList() {
  const [showMore, setShowMore] = React.useState(false);

  const maxItems = 6;

  // Fonction pour gérer l'affichage de plus d'éléments
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const products = [
    { title: "Product 1", description: "Description", image: "/app/components/images/Burnikk.png" },
    { title: "Product 2", description: "Description", image: "/images/Tiktilaok_Manok.png" },
    { title: "Product 3", description: "Description", image: "/images/Very_Nice.png" },
    { title: "Product 4", description: "Description", image: "/images/Quake_Overload.png" },
    { title: "Product 5", description: "Description", image: "/images/Kutu.png" },
    { title: "Product 6", description: "Description", image: "/images/Tuluk.png" },
    { title: "Product 7", description: "Description", image: "/images/Balakubak.png" },
    { title: "Product 8", description: "Description", image: "/images/Pitaklan.png" },
    { title: "Product 9", description: "Description", image: "/images/Burnikk.png" },
    { title: "Product 10", description: "Description", image: "/images/Buldit.png" },
    { title: "Product 11", description: "Description", image: "/images/Sipon_Malapot.png" },
  ];

  const slicedProducts = showMore ? products : products.slice(0, maxItems);

  return (
    <div className="features-container">
      <div className="features">
        <div className="shop-products">
          <div className="product-grid">
            {slicedProducts.map((product) => (
              <div key={product.title} className="product-card" style={{ width: '18rem' }}>
                <img src={product.image} alt={product.title} className="img-fluid bg-light" />
                <div className="p-3">
                  <h5 className="mb-2">{product.title}</h5>
                  <p className="mb-0">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {products.length > maxItems && (
        <div className="show-more-container">
          <button className="show-more" onClick={handleShowMore}>
            {showMore ? 'Show Less' : 'Show More Items'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Featured;
