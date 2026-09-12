import { pages, loop } from './data.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Home } from './pages/Home.js';
import { System } from './pages/System.js';
import { Architecture } from './pages/Architecture.js';
import { Modules } from './pages/Modules.js';
import { Reality } from './pages/Reality.js';
import { Evaluation } from './pages/Evaluation.js';
import { Evolution } from './pages/Evolution.js';

const pageViews = { home: Home, system: System, architecture: Architecture, modules: Modules, reality: Reality, evaluation: Evaluation, evolution: Evolution };
const metadata = { ...pages, system: { label: '00 · SYSTEM', title: 'GKFXL OS <span>control center.</span>', intro: 'A practical operating layer connecting mission, context, decision, action, verification, reality, and learning.' } };

export function createRouter(root) {
  let current = 'home';
  function render(page = current) {
    current = pageViews[page] ? page : 'home';
    const meta = metadata[current];
    root.innerHTML = `${Navbar(current)}<main><section class="page-head"><p class="eyebrow">${meta.label}</p><h2>${meta.title}</h2><p>${meta.intro}</p></section><section class="page-content">${pageViews[current]()}</section></main>${Footer()}`;
    bind();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function bind() {
    root.querySelectorAll('[data-nav]').forEach((el) => el.addEventListener('click', () => render(el.dataset.nav)));
    root.querySelector('#menu')?.addEventListener('click', () => root.querySelector('.nav nav')?.classList.toggle('open'));
    root.querySelectorAll('.flow-step').forEach((btn) => btn.addEventListener('click', () => {
      const index = Number(btn.dataset.step);
      const [name, description] = loop[index];
      const detail = root.querySelector('#step-detail');
      if (detail) detail.innerHTML = `<small>STAGE ${String(index + 1).padStart(2, '0')}</small><h3>${name}</h3><p>${description}</p>`;
      root.querySelectorAll('.flow-step').forEach((item) => item.classList.remove('selected'));
      btn.classList.add('selected');
    }));
  }
  window.gkfxlNavigate = render;
  render();
  return { navigate: render };
}
