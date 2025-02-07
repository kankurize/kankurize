
// Toggle dropdown menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add a simple fade-in animation for the hero section
  const hero = document.querySelector('.hero');
  window.addEventListener('load', () => {
    hero.style.opacity = '1';
  });


  // Static grade value (update this number to change the grade)
const grade = 58; // Change this value to update the grade

// Function to update the grade display
function updateGradeDisplay(grade) {
  const progressBar = document.getElementById('progress-bar');
  const gradeValue = document.getElementById('grade-value');
  const progressCircle = document.querySelector('.progress-circle');

  // Update progress bar
  progressBar.style.width = `${grade}%`;

  // Update circular progress
  progressCircle.style.background = `conic-gradient(#ff6f61 ${grade}%, #eee ${grade}%)`;

  // Update grade value text
  gradeValue.textContent = `${grade}%`;
}

// Initialize with the static grade value
updateGradeDisplay(grade);


