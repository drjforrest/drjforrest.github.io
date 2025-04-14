import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackLinkProps {
  to: string;
  label: string;
}

const BackLink: React.FC<BackLinkProps> = ({ to, label }) => {
  return (
    <Link 
      to={to} 
      className="back-link inline-flex items-center text-[#63757D] hover:text-[#19404C] transition-colors"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {label}
    </Link>
  );
};

export default BackLink;