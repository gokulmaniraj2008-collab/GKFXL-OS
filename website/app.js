const cards = document.querySelectorAll('.loop-card');
const detailTitle = document.getElementById('detailTitle');
const detailCopy = document.getElementById('detailCopy');
const progress = document.getElementById('progress');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.loop-card, .module-grid article, .timeline > div, .evidence-row').forEach((el) => observer.observe(el));

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    if (detailTitle) detailTitle.textContent = card.dataset.title || '';
    if (detailCopy) detailCopy.textContent = card.dataset.copy || '';
  });
});

function updateProgress() {
  if (!progress) return;
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
