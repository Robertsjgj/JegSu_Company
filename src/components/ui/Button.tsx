import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  href, 
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-colors duration-200';
  const variants = {
    primary: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700',
    secondary: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {Icon && <Icon className="ml-2" size={20} />}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
      {Icon && <Icon className="ml-2" size={20} />}
    </button>
  );
}