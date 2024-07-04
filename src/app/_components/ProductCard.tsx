import React from 'react';

const ProductCard = ({ title, description, image, width, height }) => (
  <div className="product-card">
    <img src={image} alt={title} width={width} height={height} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ProductCard;
