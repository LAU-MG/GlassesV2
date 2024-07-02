// src/pages/index.tsx
import React from 'react';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Index Page</h1>
      <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/home`} passHref>
       go home
      </Link>
    </div>
  );
};

export default IndexPage;
