const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.Navigation nav ul');
const links = document.querySelectorAll('.Navigation nav ul li a');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});
