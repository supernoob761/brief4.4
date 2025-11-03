const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.textContent = 'Light';
} else {
  themeToggle.textContent = 'Dark';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
});
