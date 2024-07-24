import Image from 'next/image';
import React from 'react';
import '../../styles.scss';
import 'bootstrap/scss/bootstrap.scss';
import PageLayout from '../PageLayout';
import ProductCard from '../../components/ProductCard';

function Featured() {
  return (
    <PageLayout
      title="Featured Products"
      heroImage="/images/hero-section.png"
      heroImageWidth={600}
      heroImageHeight={400}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* Espace laissé vide pour l'alignement */}
          </div>
        </div>
      </div>
      <div className="col-md-11 mx-auto">
            <div className="title-products feature-left">
              <h2><strong>Featured Products</strong></h2>
            </div>
          <div className="row">
            {[
              { title: 'Burnikk', image: '/images/Burnikk.png' },
              { title: 'Kibal Batal', image: '/images/Kibal_Batal.png' },
              { title: 'Very Nice', image: '/images/Very_Nice.png' },
              { title: 'Buldit', image: '/images/Buldit.png' },
              { title: 'Balakubak', image: '/images/Balakubak.png' },
              { title: 'Tikitilao ', image: '/images/Tiktilaok_Manok.png' },
              { title: 'Kutu', image: '/images/Kutu.png' },
              { title: 'Quake ', image: '/images/Quake_Overload.png' },
            ].map((product, index) => (
              <div className="col-md-3 mb-4" key={index} >
                <ProductCard
                  title={product.title}
                  description="Description"
                  image={product.image}
                  width={190}
                  height={200}

                />
              </div>
            ))}
          </div>
      </div>
    </PageLayout>
  );
}

export default Featured;
