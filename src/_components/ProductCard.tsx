import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Card.scss';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <Card style={{ width: '18rem' }} className="zoom-effect">
      <Card.Img variant="top" src={`${basePath}${image}`} alt={title} className="bg-light" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
