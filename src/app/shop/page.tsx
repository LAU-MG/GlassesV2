"use client"; // Indique que ce composant est un composant client

import React from 'react';
import '../styles.scss';
import Header from '../_components/Header';
import ProductCard from '../_components/ProductCard';
import 'bootstrap/scss/bootstrap.scss';

const products = [
  { title: "Product 1", description: "Description", image: "/images/Kulangot.png" },
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

const ProductCardList = () => (
  <div className="features-container">
    <div className="features">
      <div className="shop-products">
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Featured = () => (
  <div className="App">
    <Header />
    <ProductCardList />
  </div>
);

export default Featured;
