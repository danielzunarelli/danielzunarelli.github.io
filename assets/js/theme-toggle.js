// Theme Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference, otherwise use light theme
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.checked = false;
  }
  
  // Handle theme toggle
  themeToggle.addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});