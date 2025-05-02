
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');
    
    mobileToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Project Tabs
    const projectTabs = document.querySelectorAll('.project-tab');
    const projectItems = document.querySelectorAll('.project-item');
    
    projectTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        projectTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Filter projects
        const filter = tab.getAttribute('data-filter');
        
        projectItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile nav if open
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
        }
      });
    });
  