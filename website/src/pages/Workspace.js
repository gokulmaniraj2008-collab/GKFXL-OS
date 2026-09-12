const initialState = () => ({
  mission: '',
  evidence: '',
  action: '',
  outcome: '',
  confidence: 50,
  state: 'HOLD',
  score: 0,
});

function classify({ mission, evidence, action, outcome, confidence }) {
  const evidenceScore = evidence.trim().length >= 40 ? 2 : evidence.trim().length >= 10 ? 1 : 0;
  const actionScore = action.trim().length >= 10 ? 1 : 0;
  const outcomeScore = outcome.trim().length >= 10 ? 1 : 0;
  const score = evidenceScore + actionScore + outcomeScore;
  const state = score >= 3 && confidence >= 60 ? 'PASS' : score === 0 || confidence < 30 ? 'REJECT' : 'HOLD';
  return { state, score };
}

export function Workspace() {
  return `<div class="workspace">
    <div class="workspace-grid">
      <section class="work-card">
        <div class="card-kicker">LIVE DECISION LOOP</div>
        <h3>Turn a decision into a testable outcome.</h3>
        <p>Enter a real mission, record the evidence you have, choose an action, and capture the outcome. The local engine will classify the decision using the GKFXL evidence gate.</p>
        <label>Mission<input id="ws-mission" placeholder="What outcome matters?" /></label>
        <label>Evidence<textarea id="ws-evidence" placeholder="What do you actually know or observe?"></textarea></label>
        <label>Proposed action<input id="ws-action" placeholder="What is the smallest useful action?" /></label>
        <label>Observed outcome<textarea id="ws-outcome" placeholder="What happened after the action?"></textarea></label>
        <label>Confidence <output id="ws-confidence-value">50%</output><input id="ws-confidence" type="range" min="0" max="100" value="50" /></label>
        <button class="primary" id="ws-evaluate">Evaluate decision</button>
      </section>
      <section class="work-card result-card">
        <div class="card-kicker">REALITY GATE</div>
        <div class="decision-state hold" id="ws-state">HOLD</div>
        <h3 id="ws-title">Evidence required before commitment.</h3>
        <p id="ws-message">Complete the decision record. The system separates what is known from what is merely assumed.</p>
        <div class="score"><span>Evidence quality</span><strong id="ws-score">0 / 4</strong></div>
        <div class="work-divider"></div>
        <h4>Control rule</h4>
        <p>PASS when evidence, action, outcome, and confidence meet the threshold. HOLD when uncertainty is still actionable. REJECT when evidence is too weak for a consequential decision.</p>
      </section>
    </div>
    <section class="work-card ledger-card">
      <div><div class="card-kicker">PREDICTION → OUTCOME MEMORY</div><h3>Local outcome ledger</h3><p>Entries stay in this browser. No external API or secret is required for the demo.</p></div>
      <button class="secondary" id="ws-clear">Clear ledger</button>
      <div id="ws-ledger" class="ledger"></div>
    </section>
  </div>`;
}

export function bindWorkspace(root) {
  const state = initialState();
  const $ = (id) => root.querySelector(`#${id}`);
  const ledger = () => JSON.parse(localStorage.getItem('gkfxl-ledger') || '[]');
  const renderLedger = () => {
    const items = ledger();
    $('ws-ledger').innerHTML = items.length ? items.slice().reverse().map((item) => `<article><strong>${item.state}</strong><span>${item.mission || 'Untitled mission'}</span><small>${item.score}/4 · ${item.confidence}% confidence</small></article>`).join('') : '<p class="empty">No evaluated decisions yet.</p>';
  };
  $('ws-confidence')?.addEventListener('input', (e) => { state.confidence = Number(e.target.value); $('ws-confidence-value').textContent = `${state.confidence}%`; });
  $('ws-evaluate')?.addEventListener('click', () => {
    state.mission = $('ws-mission').value;
    state.evidence = $('ws-evidence').value;
    state.action = $('ws-action').value;
    state.outcome = $('ws-outcome').value;
    const result = classify(state);
    state.state = result.state;
    state.score = result.score;
    const stateEl = $('ws-state');
    stateEl.textContent = result.state;
    stateEl.className = `decision-state ${result.state.toLowerCase()}`;
    $('ws-score').textContent = `${result.score} / 4`;
    $('ws-title').textContent = result.state === 'PASS' ? 'Decision cleared for the next controlled step.' : result.state === 'REJECT' ? 'Decision rejected by the evidence gate.' : 'Hold the decision and improve the evidence.';
    $('ws-message').textContent = result.state === 'PASS' ? 'The record has enough evidence for a bounded action. Measure the next outcome and feed it back.' : result.state === 'REJECT' ? 'Do not treat an assumption as a verified fact. Gather evidence or reduce the consequence of the action.' : 'Add stronger evidence, define the expected outcome, or reduce uncertainty before committing.';
    const items = ledger();
    items.push({ mission: state.mission, state: result.state, score: result.score, confidence: state.confidence, at: new Date().toISOString() });
    localStorage.setItem('gkfxl-ledger', JSON.stringify(items.slice(-20)));
    renderLedger();
  });
  $('ws-clear')?.addEventListener('click', () => { localStorage.removeItem('gkfxl-ledger'); renderLedger(); });
  renderLedger();
}
