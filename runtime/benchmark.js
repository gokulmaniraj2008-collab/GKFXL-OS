// GKFXL OS v6.4 executable benchmark
import { runGKFXL } from './index.js';

const scenarios = [
  { id: 'B01', mission: 'Validate deployment readiness', evidence: 'Automated tests pass and production build completed successfully.', action: 'Deploy after verification', outcome: 'Deployment completed successfully', confidence: 80, expected: 'PASS' },
  { id: 'B02', mission: 'Decide with weak evidence', evidence: 'Maybe ready', action: 'Deploy', outcome: '', confidence: 55, expected: 'HOLD' },
  { id: 'B03', mission: 'Reject unsafe action', evidence: '', action: '', outcome: '', confidence: 20, expected: 'REJECT' },
  { id: 'B04', mission: 'Escalate uncertain decision', evidence: 'Partial verification available', action: 'Proceed cautiously', outcome: 'Awaiting result', confidence: 40, expected: 'ESCALATE' },
  { id: 'B05', mission: 'Learn from verified outcome', evidence: 'The observed result is supported by multiple checks.', action: 'Apply tested change', outcome: 'Change improved reliability', confidence: 75, expected: 'PASS' },
];

export function runBenchmark() {
  const results = scenarios.map((scenario) => {
    const result = runGKFXL(scenario);
    return {
      id: scenario.id,
      expected: scenario.expected,
      actual: result.decision.state,
      passed: scenario.expected === result.decision.state,
      score: result.decision.score,
      confidence: result.decision.confidence,
      grounded: result.reality.grounded,
      learnable: result.learning.learnable,
    };
  });

  const passed = results.filter((r) => r.passed).length;
  return {
    version: '6.4',
    scenarios: results.length,
    passed,
    failed: results.length - passed,
    accuracy: Number(((passed / results.length) * 100).toFixed(2)),
    results,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(runBenchmark(), null, 2));
}
