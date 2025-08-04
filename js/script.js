document.addEventListener('DOMContentLoaded', () => {
  // Video error handling
  const video = document.querySelector('video');
  if (video) {
    video.addEventListener('error', (event) => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Sorry, the video cannot be loaded at this time.';
      errorMessage.style.color = 'red';
      errorMessage.style.textAlign = 'center';
      video.parentNode.insertBefore(errorMessage, video.nextSibling);
    });
  }

  // Responsive navigation toggle (if needed in future)
  // Placeholder for mobile menu toggle logic
});
