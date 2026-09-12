import { navItems } from '../data.js';

export function Navbar(currentPage, navigate) {
  const links = navItems.map(([key, label]) => `<button data-nav="${key}" class="${currentPage === key ? 'active' : ''}">${label}</button>`).join('');
  return `<header class="nav"><button class="brand" data-nav="home"><span class="brand-mark">G</span>GKFXL <em>OS</em></button><nav>${links}</nav><a class="github" href="https://github.com/gokulmaniraj2008-collab/GKFXL-OS" target="_blank" rel="noreferrer">GitHub ↗</a><button class="menu" id="menu">☰</button></header>`;
}
