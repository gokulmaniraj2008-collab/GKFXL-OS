import { modules } from '../data.js';

export function Modules() {
  return `<div class="module-grid">${modules.map((m,i)=>`<article class="module-card"><div class="module-number">${String(i+1).padStart(2,'0')}</div><h3>${m[0]}</h3><p>${m[1]}</p></article>`).join('')}</div>`;
}
