import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
              JegSu
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isActive={isActive} />
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile isActive={isActive} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile = false, isActive }: { mobile?: boolean, isActive: (path: string) => boolean }) {
  const links = [
    { to: '/features', text: 'Features' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  const baseStyles = mobile
    ? 'block px-3 py-2 text-base font-medium rounded-md'
    : 'text-gray-600 hover:text-gray-900 transition-colors';

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`${baseStyles} ${
            isActive(link.to) 
              ? 'text-indigo-600 font-semibold' 
              : mobile ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : ''
          }`}
        >
          {link.text}
        </Link>
      ))}
    </>
  );
}