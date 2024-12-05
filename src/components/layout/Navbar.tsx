import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">JegSu</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
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
            <NavLinks mobile />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const links = [
    { href: '#features', text: 'Features' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' },
  ];

  const baseStyles = mobile
    ? 'block px-3 py-2 text-base font-medium rounded-md'
    : 'text-gray-600 hover:text-gray-900';

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`${baseStyles} ${
            mobile ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : ''
          }`}
        >
          {link.text}
        </a>
      ))}
    </>
  );
}