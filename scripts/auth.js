// Simple authentication check
(function() {
  // Don't check authentication on the index page itself
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    return;
  }
  
  // Check if the user is authenticated
  const isAuthenticated = sessionStorage.getItem('fppAuth') === 'true';
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    window.location.href = 'index.html';
  }
})();