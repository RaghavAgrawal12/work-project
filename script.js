// Add any JavaScript functionality if needed in the future
document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth Scroll on button click
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
  });