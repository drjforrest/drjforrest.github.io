import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages - Lazy loaded
const ExecutiveSummary = React.lazy(() => import('./pages/ExecutiveSummary'));
const Context = React.lazy(() => import('./pages/Context'));
const Stakeholders = React.lazy(() => import('./pages/Stakeholders'));
const MediaStrategy = React.lazy(() => import('./pages/MediaStrategy'));
const WebsiteRedesign = React.lazy(() => import('./pages/WebsiteRedesign'));
const Implementation = React.lazy(() => import('./pages/Implementation'));

// Components that are needed immediately
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="spinner"></div>
  </div>
);

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
    return isAuthenticated ? (
      <Suspense fallback={<LoadingSpinner />}>
        {element}
      </Suspense>
    ) : (
      <Navigate to="/" replace />
    );
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