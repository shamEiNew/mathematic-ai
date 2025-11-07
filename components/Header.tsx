
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="text-4xl font-bold font-sans hover:text-gray-300 transition-colors duration-300">
          Mathematics & AI
        </Link>
        <p className="text-gray-400 mt-1">Exploring the frontier of automated discovery.</p>
      </div>
    </header>
  );
};

export default Header;
