import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import '../styles.scss';

const ProductList = ({ title, products, link }) => {
  return (
    <div className="product-list mx-2">
      <div className="row align-items-center mb-2">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h3 className="fw-bold me-3">{title}</h3>
          <div className="see-all-link fw-bold">
            <Link href={link}>See All</Link>
          </div>
        </div>
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3 mb-4 px-3">
            <div className="card h-100" style={{ border: '1px solid #ccc'}}>
              <Image
                src={product.image}
                className="card-img-top"
                alt={product.title}
                width={product.width}
                height={product.height}
                style={{ backgroundColor: '#f0f0f0' }}              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ProductList;
