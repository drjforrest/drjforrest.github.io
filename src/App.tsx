import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

// Pages
import Login from './pages/Login';
import ExecutiveSummary from './pages/ExecutiveSummary';
import Context from './pages/Context';
import Stakeholders from './pages/Stakeholders';
import MediaStrategy from './pages/MediaStrategy';
import WebsiteRedesign from './pages/WebsiteRedesign';
import Implementation from './pages/Implementation';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if user is authenticated
    const auth = sessionStorage.getItem('fppAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (password: string): boolean => {
    if (password === 'FPP2025!') {
      sessionStorage.setItem('fppAuth', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    sessionStorage.removeItem('fppAuth');
    setIsAuthenticated(false);
  };

  // Protected route component
  const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    return isAuthenticated ? <>{element}</> : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {isAuthenticated && <Header onLogout={handleLogout} />}
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              isAuthenticated ? 
                <Navigate to="/executive-summary" replace /> : 
                <Login onLogin={handleLogin} />
            } />
            <Route path="/executive-summary" element={
              <ProtectedRoute element={<ExecutiveSummary />} />
            } />
            <Route path="/context" element={
              <ProtectedRoute element={<Context />} />
            } />
            <Route path="/stakeholders" element={
              <ProtectedRoute element={<Stakeholders />} />
            } />
            <Route path="/media-strategy" element={
              <ProtectedRoute element={<MediaStrategy />} />
            } />
            <Route path="/website-redesign" element={
              <ProtectedRoute element={<WebsiteRedesign />} />
            } />
            <Route path="/implementation" element={
              <ProtectedRoute element={<Implementation />} />
            } />
          </Routes>
        </main>

        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;