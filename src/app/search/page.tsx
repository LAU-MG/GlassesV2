
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../_components/scss/SearchBar.scss";



const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default SearchBar;
