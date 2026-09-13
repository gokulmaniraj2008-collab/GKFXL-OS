import test from 'node:test';
import assert from 'node:assert/strict';
import { runGKFXL } from './index.js';

test('v6.4 runtime returns the integrated loop', () => {
  const result = runGKFXL({
    mission: 'Validate release readiness',
    context: { environment: 'production' },
    evidence: 'Automated tests pass and the production build completed successfully.',
    action: 'Deploy after verification',
    outcome: 'Deployment completed successfully',
    confidence: 80,
  });

  assert.equal(result.version, '6.4');
  assert.equal(result.decision.state, 'PASS');
  assert.equal(result.reality.grounded, true);
  assert.equal(result.attribution.attributable, true);
  assert.equal(result.learning.learnable, true);
  assert.equal(result.memory.prediction, 'PASS');
});

test('v6.4 rejects an unsupported decision', () => {
  const result = runGKFXL({ mission: 'x', confidence: 20 });
  assert.equal(result.decision.state, 'REJECT');
  assert.equal(result.reality.decisionAllowed, true);
  assert.equal(result.learning.learnable, false);
});
