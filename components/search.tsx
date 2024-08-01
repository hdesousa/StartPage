import { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (engine: string) => (event: FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    let url = '';

    switch (engine) {
      case 'google':
        url = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        break;
      case 'duckduckgo':
        url = `https://duckduckgo.com/?q=${encodeURIComponent(searchTerm)}`;
        break;
      case 'maps':
        url = `https://www.google.com/maps/search/${encodeURIComponent(searchTerm)}`;
        break;
      default:
        break;
    }

    window.open(url, '_blank');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input 
      aria-label="Suggest a feature for our roadmap" 
      className="pl-3 pr-3 py-3 mt-1 text-lg block w-full border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300" 
      placeholder="Search for..."
      required
      type="text" 
      name="feature" 
      value={searchTerm} 
      onChange={handleInputChange}
      />
      <div className="flex items-center">
        <button 
            className="items-center justify-center my-5 mx-5 px-4 h-10 text-lg border bg-black text-white rounded-md w-36 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-800" 
            onClick={handleSearch('duckduckgo')}
        >
          DuckDuckGo
        </button>
        <button 
            className="items-center justify-center my-5 mx-5 px-4 h-10 text-lg border bg-black text-white rounded-md w-24 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-800"
            onClick={handleSearch('google')}
        >
          Google
        </button>
        <button 
            className="items-center justify-center my-5 mx-5 px-4 h-10 text-lg border bg-black text-white rounded-md w-36 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-800" 
            onClick={handleSearch('maps')}
        >
          GMaps
        </button>
      </div>
    </>
  );
};

export default Search;