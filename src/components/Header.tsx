import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="header bg-[#19404C] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="logo text-xl font-bold mb-4 md:mb-0">Fair Price Pharma Proposal</div>
        <nav className="navigation flex flex-wrap gap-4 md:gap-6 justify-center">
          <NavLink 
            to="/executive-summary" 
            className={({ isActive }) => 
              isActive ? "font-semibold text-white" : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Executive Summary
          </NavLink>
          <NavLink 
            to="/context" 
            className={({ isActive }) => 
              isActive ? "font-semibold text-white" : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Background
          </NavLink>
          <NavLink 
            to="/stakeholders" 
            className={({ isActive }) => 
              isActive ? "font-semibold text-white" : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Stakeholder Matrix
          </NavLink>
          <NavLink 
            to="/media-strategy" 
            className={({ isActive }) => 
              isActive ? "font-semibold text-white" : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Media Strategy
          </NavLink>
          <NavLink 
            to="/website-redesign" 
            className={({ isActive }) => 
              isActive ? "font-semibold text-white" : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Website Redesign
          </NavLink>
          <NavLink 
            to="/implementation" 
            className={({ isActive }) => 
              isActive ? "font-semibold text-white" : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Implementation
          </NavLink>
          
          <button 
            onClick={onLogout}
            className="logout-button flex items-center text-white/80 hover:text-white ml-4"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;