import React from 'react';
import Image from 'next/image';
import '../styles.scss';
import Header from '../_components/Header';

// Déclarez une interface pour les propriétés du composant ProductCard
interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, width, height }) => (
  <div className="product-card">
    <Image
      src={image}
      alt={title}
      width={width}
      height={height}
    />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const products = [
  { title: "Product 1", description: "Description", image: "/images/Kulangot.png", width: 200, height: 200 },
  { title: "Product 2", description: "Description", image: "/images/Tiktilaok_Manok.png", width: 200, height: 200 },
  { title: "Product 3", description: "Description", image: "/images/Very_Nice.png", width: 200, height: 200 },
  { title: "Product 4", description: "Description", image: "/images/Quake_Overload.png", width: 200, height: 200 },
  { title: "Product 5", description: "Description", image: "/images/Kutu.png", width: 200, height: 200 },
  { title: "Product 6", description: "Description", image: "/images/Tuluk.png", width: 200, height: 200 },
  { title: "Product 7", description: "Description", image: "/images/Balakubak.png", width: 200, height: 200 },
  { title: "Product 8", description: "Description", image: "/images/Pitaklan.png", width: 200, height: 200 },
  { title: "Product 9", description: "Description", image: "/images/Burnikk.png", width: 200, height: 200 },
  { title: "Product 10", description: "Description", image: "/images/Buldit.png", width: 200, height: 200 },
  { title: "Product 11", description: "Description", image: "/images/Sipon_Malapot.png", width: 200, height: 200 },
];

const ProductCardList: React.FC = () => (
  <div className="features-container">
    <div className="features">
      <div className="shop-products">
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              width={product.width}
              height={product.height}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Featured: React.FC = () => (
  <div className="App">
    <Header />
    <ProductCardList />
  </div>
);

export default Featured;
