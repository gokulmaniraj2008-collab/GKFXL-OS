import { loop } from '../data.js';

export function Architecture() {
  return `<div class="architecture-flow">${loop.map((x,i)=>`<button class="flow-step" data-step="${i}"><small>${String(i+1).padStart(2,'0')}</small><strong>${x[0]}</strong><span>${x[1]}</span></button>`).join('')}</div><div id="step-detail" class="detail-panel"><small>SELECT A STAGE</small><h3>Mission</h3><p>${loop[0][1]}</p></div><div class="rule-grid"><article><b>PASS</b><p>Sufficient evidence and acceptable risk.</p></article><article><b>HOLD</b><p>More verification or evidence is required.</p></article><article><b>REJECT</b><p>Evidence or safety is insufficient.</p></article><article><b>ESCALATE</b><p>Uncertainty or consequence exceeds the safe boundary.</p></article></div>`;
}
