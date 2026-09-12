export const navItems = [
  ['home', 'Home'],
  ['workspace', 'Decision Lab'],
  ['system', 'System'],
  ['architecture', 'Architecture'],
  ['modules', 'Modules'],
  ['reality', 'Reality'],
  ['evaluation', 'Evaluation'],
  ['evolution', 'Evolution'],
];

export const modules = [
  ['Reality Feedback Engine', 'Turns real-world outcomes into feedback that improves the next decision.'],
  ['Outcome Attribution Engine', 'Separates correlation from credible causes before the system learns a lesson.'],
  ['Confidence Calibration', 'Keeps confidence aligned with measured prediction performance.'],
  ['Experiment Design Engine', 'Converts uncertainty into small, controlled, reversible experiments.'],
  ['A/B Strategy Evaluation', 'Tests competing strategies against the same measurable outcome.'],
  ['Regression Intelligence', 'Detects when a new improvement silently breaks an existing capability.'],
  ['Drift Detection', 'Flags changes in data, behavior, requirements, and operating conditions.'],
  ['Causal Outcome Ledger', 'Maintains an evidence trail linking actions, outcomes, candidate causes, and attribution confidence.'],
  ['Capability Benchmark Suite', 'Measures whether the system is actually becoming better, not merely more complex.'],
  ['Reality Grounding Gate', 'Stops consequential decisions when evidence is missing, stale, or unsupported.'],
  ['Learning Quality Controller', 'Prevents weak observations from becoming false rules or permanent assumptions.'],
  ['Prediction-to-Outcome Memory', 'Connects predictions, confidence, actions, outcomes, errors, and lessons over time.'],
];

export const loop = [
  ['Mission', 'Define the outcome, constraint, and reason the work matters.'],
  ['Context', 'Build the current state from evidence, history, dependencies, constraints, and uncertainty.'],
  ['Decision', 'Select the highest-value safe action supported by the available evidence.'],
  ['Action', 'Execute the smallest useful step that can create meaningful progress or information.'],
  ['Observation', 'Record what actually happened instead of what was expected to happen.'],
  ['Reality Grounding', 'Separate observed facts from inference, assumption, and unknowns.'],
  ['Feedback', 'Compare prediction with outcome and quantify the gap.'],
  ['Attribution', 'Evaluate plausible causes before assigning credit, blame, or a lesson.'],
  ['Calibration', 'Adjust confidence using measured prediction performance.'],
  ['Learning', 'Accept, reject, or hold a lesson according to evidence quality and consequence.'],
  ['Benchmark', 'Re-test the capability to determine whether performance actually improved.'],
  ['Next Decision', 'Carry verified learning into the next decision without repeating known mistakes.'],
];

export const pages = {
  home: { label: '00 · CONTROL CENTER', title: 'Think clearly. <span>Act deliberately.</span>', intro: 'GKFXL OS is a reality-driven AI operating system for turning ideas, decisions, and projects into measurable outcomes.' },
  workspace: { label: '01 · DECISION LAB', title: 'Run the loop. <span>Test the decision.</span>', intro: 'Use the live workspace to turn a real decision into an evidence record, reality-gate result, and local outcome memory.' },
  architecture: { label: '02 · SYSTEM ARCHITECTURE', title: 'A decision system built around <span>reality.</span>', intro: 'v6.4 connects mission, evidence, action, observation, evaluation, and learning into one closed control loop.' },
  modules: { label: '03 · INTELLIGENCE LAYER', title: 'Intelligence that <span>earns trust.</span>', intro: 'Cross-cutting mechanisms test assumptions, measure outcomes, detect regressions, and control how the system learns.' },
  reality: { label: '04 · REALITY ENGINE', title: 'Evidence before <span>confidence.</span>', intro: 'The system distinguishes what is observed, supported, inferred, assumed, and still unknown before consequential decisions are made.' },
  evaluation: { label: '05 · EVALUATION', title: 'Improvement must be <span>measurable.</span>', intro: 'GKFXL OS treats benchmarks, regression checks, drift detection, and calibration as proof that a change actually improved the system.' },
  evolution: { label: '06 · EVOLUTION', title: 'From reasoning framework to <span>outcome-driven OS.</span>', intro: 'Each version adds capability only when it strengthens the integrated system, preserves reliability, and improves real-world decision quality.' },
};
