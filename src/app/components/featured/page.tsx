import React from 'react';
import '../../styles.scss';
import ProductCard from '../../components/ProductCard';
import 'bootstrap/scss/bootstrap.scss';
import PageLayout from '../PageLayout';

function Featured() {
  return (
    <PageLayout title="Featured Products">
      <div className="features-container">
        <div className="features">
          <div className="title-products feature-left">
            <h1>Featured Products (test)</h1>
          </div>
        </div>
        <div className="features-products">
          {[
            { title: 'Burnikk', image: '/images/Burnikk.png' },
            { title: 'Kibal Batal', image: '/images/Kibal_Batal.png' },
            { title: 'Very Nice', image: '/images/Very_Nice.png' },
            { title: 'Buldit', image: '/images/Buldit.png' },
            { title: 'Balakubak', image: '/images/Balakubak.png' },
            { title: 'Tikitilao Manok', image: '/images/Tikitilao_Manok.png' },
            { title: 'Kutu', image: '/images/Kutu.png' },
            { title: 'Quake Overload', image: '/images/Quake_Overload.png' },
          ].map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description="Description"
              image={product.image}
              width={200}
              height={180}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default Featured;
