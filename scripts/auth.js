// Simple authentication check
(function() {
  // Don't check authentication on the login page itself
  if (window.location.pathname.endsWith('login.html')) {
    return;
  }
  
  // Check if the user is authenticated
  const isAuthenticated = sessionStorage.getItem('fppAuth') === 'true';
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    window.location.href = 'login.html';
  }
})();