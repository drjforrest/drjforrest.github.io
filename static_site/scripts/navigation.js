// Navigation and common functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add logout button to navigation
  const navContainer = document.querySelector('.navigation');
  if (navContainer) {
    const logoutButton = document.createElement('button');
    logoutButton.className = 'logout-button';
    logoutButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
    logoutButton.addEventListener('click', function() {
      // Clear authentication
      sessionStorage.removeItem('fppAuth');
      // Redirect to login page
      window.location.href = 'index.html';
    });
    navContainer.appendChild(logoutButton);
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip empty anchors
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active nav link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = {
    'executive-summary.html': 'Executive Summary',
    'context.html': 'Background',
    'stakeholders.html': 'Stakeholder Matrix',
    'media-strategy.html': 'Media Strategy',
    'website-redesign.html': 'Website Redesign',
    'implementation.html': 'Implementation'
  };
  
  // Update navigation text and active states
  document.querySelectorAll('.navigation a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Mobile menu toggle
  const navContainerParent = document.querySelector('.nav-container');
  if (navContainerParent) {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button md:hidden';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    navContainerParent.insertBefore(mobileMenuButton, navContainer);
    
    mobileMenuButton.addEventListener('click', () => {
      navContainer.classList.toggle('mobile-menu-open');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navigation') && !e.target.closest('.mobile-menu-button')) {
      navContainer.classList.remove('mobile-menu-open');
    }
  });
  
  // Handle responsive navigation
  function handleResponsive() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      navContainer.classList.add('mobile');
    } else {
      navContainer.classList.remove('mobile', 'mobile-menu-open');
    }
  }
  
  // Initial call
  handleResponsive();
  
  // Re-call on resize
  window.addEventListener('resize', handleResponsive);
});