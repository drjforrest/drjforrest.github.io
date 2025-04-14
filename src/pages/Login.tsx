import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface LoginProps {
  onLogin: (password: string) => boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#19404C] to-[#2A2825] p-4">
      <div className="login-container bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <div className="logo text-[#19404C] text-2xl font-bold mb-8 text-center">
          Fair Price Pharma Proposal
        </div>
        
        <form id="login-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              className="input-field w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#19404C] focus:border-transparent"
              placeholder="Enter password" 
              required
              autoComplete="current-password"
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button w-full bg-[#19404C] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#2A5A6C] transition-colors flex items-center justify-center"
          >
            <Lock className="w-5 h-5 mr-2" />
            Access Proposal
          </button>
          
          {error && (
            <p id="error-message" className="error-message text-red-500 text-center">
              Incorrect password. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;