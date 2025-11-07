
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Mathematics & AI. All rights reserved.</p>
        <p className="text-sm mt-1">Blog page built by Gemini</p>
      </div>
    </footer>
  );
};

export default Footer;
