// Add an event listener to the learn more buttons
document.querySelectorAll('.learn-more').forEach((button) => {
    button.addEventListener('click', (e) => {
      const plan = e.target.getAttribute('data-plan');
      const modal = document.getElementById('modal');
      const planDetails = document.getElementById('plan-details');
  
      planDetails.textContent = `Plan: ${plan}
      Validity: ${e.target.parentNode.querySelector('p').textContent}`;
  
      modal.style.display = 'block';
    });
  });
  
  // Add an event listener to the close button
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });