import Image from 'next/image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
  return (
    <div className="zoom-effect card" style={{ width: '18rem' }}>
      <Image src={image} alt={title} className="card-img-top bg-light" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
