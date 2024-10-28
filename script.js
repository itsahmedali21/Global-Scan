document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  });

  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    observer.observe(element);
  });
});


function revealOnScroll() {
  const hiddenElements = document.querySelectorAll('.hidden');
  
  hiddenElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 50) {
      element.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);

