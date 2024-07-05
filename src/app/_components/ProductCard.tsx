// src/app/_components/ProductCard.tsx

import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, width, height }) => (
  <div className="product-card">
    <Image src={image} alt={title} width={width} height={height} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ProductCard;
