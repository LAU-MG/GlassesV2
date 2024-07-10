// components/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

interface Product {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

interface ProductListProps {
  title: string;
  products: Product[];
  link: string;
}

const ProductList: React.FC<ProductListProps> = ({ title, products, link }) => {
  return (
    <div className="features-container container">
      <div className="features">
        <div className="row align-items-center">
          <div className="title-products col-md-8 d-flex justify-content-end">
            <h3 className="fw-bold">{title}</h3>
          </div>
          <div className="see-all-link col-md-6 d-flex justify-content-end fw-bold">
            <Link href={link}>See All</Link>
          </div>
        </div>
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <ProductCard
              title={product.title}
              description={product.description}
              image={product.image}
              width={product.width}
              height={product.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
