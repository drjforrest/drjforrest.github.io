// Simple authentication check
(function() {
  // Get the current path
  const path = window.location.pathname;
  
  // Don't check authentication on the index/login page
  if (path.endsWith('index.html') || path === '/' || path === '' || path.match(/\/$/) || path.match(/\/index(\.html)?$/)) {
    return;
  }
  
  // Check if the user is authenticated
  const isAuthenticated = sessionStorage.getItem('fppAuth') === 'true';
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    window.location.href = 'index.html';
  }
})();