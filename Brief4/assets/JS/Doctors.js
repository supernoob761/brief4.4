document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('search');
  const categoryButtons = document.querySelectorAll('.Category_sel a');
  
  
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const name = card.querySelector('.Name h1').textContent.toLowerCase();
      card.style.display = (name.includes(term)) ? '' : 'none';
    });
  });

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const category = btn.textContent.toLowerCase();
      document.querySelectorAll('.card').forEach(card => {
        const cardCategory = card.querySelector('.Category h3').textContent.toLowerCase();
        card.style.display = (category === 'all' || cardCategory.includes(category)) ? '' : 'none';
      });
    });
  });
});
