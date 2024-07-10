import Image from 'next/image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, width, height }) => {
  return (
    <div className="zoom-effect card" style={{ width: '18rem' }}>
      <Image src={image} alt={title} width={width} height={height} className="card-img-top bg-light" />
      <div className="product-card">
        <img src={image} alt={title} width={width} height={height} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      </div>
  );
}

export default ProductCard;


