function toggleText() {
  const textElement = document.getElementById('text');
  const buttonElement = document.querySelector('.toggle-text-button');

  buttonElement.addEventListener('click', () => {
    if (textElement.hasAttribute('hidden')) {
      textElement.removeAttribute('hidden');
    } else {
      textElement.setAttribute('hidden', '');
    }
  });
}
