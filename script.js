const ctaButton = document.getElementById('cta-button');
const ctaMessage = document.getElementById('cta-message');

ctaButton.addEventListener('click', () => {
  ctaMessage.textContent = 'Awesome! Let\'s start building something great together.';
});
