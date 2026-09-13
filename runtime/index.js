// GKFXL OS v6.4 Runtime
// Deterministic reference runtime for the Reality-to-Outcome control loop.

export const DECISION_STATES = Object.freeze({
  PASS: 'PASS',
  HOLD: 'HOLD',
  REJECT: 'REJECT',
  ESCALATE: 'ESCALATE',
});

const textScore = (value, threshold = 10) =>
  typeof value === 'string' && value.trim().length >= threshold ? 1 : 0;

export function missionEngine(input = {}) {
  const mission = String(input.mission ?? '').trim();
  return { mission, valid: mission.length >= 3 };
}

export function contextEngine(input = {}) {
  const context = input.context ?? {};
  return {
    context,
    complete: Object.keys(context).length > 0,
  };
}

export function evidenceEngine(input = {}) {
  const evidence = String(input.evidence ?? '').trim();
  return {
    evidence,
    strength: evidence.length >= 40 ? 2 : evidence.length >= 10 ? 1 : 0,
  };
}

export function decisionEngine({ mission, evidence, action, outcome, confidence = 50 } = {}) {
  const score =
    Number(Boolean(mission?.valid ?? mission)) * 1 +
    (evidence?.strength ?? textScore(evidence)) +
    textScore(action) +
    textScore(outcome);

  let state = DECISION_STATES.HOLD;
  if (confidence < 30 || score === 0) state = DECISION_STATES.REJECT;
  else if (confidence < 50) state = DECISION_STATES.ESCALATE;
  else if (score >= 3 && confidence >= 60) state = DECISION_STATES.PASS;

  return { state, score, confidence };
}

export function actionEngine(input = {}) {
  return {
    proposed: String(input.action ?? '').trim(),
    executable: Boolean(input.action?.trim?.()),
  };
}

export function observationEngine(input = {}) {
  return {
    outcome: String(input.outcome ?? '').trim(),
    observed: Boolean(input.outcome?.trim?.()),
  };
}

export function realityGroundingGate({ evidence, observation, decision } = {}) {
  const grounded = Boolean(evidence?.strength > 0 && observation?.observed);
  return {
    grounded,
    state: grounded ? 'GROUNDED' : 'UNGROUNDED',
    decisionAllowed: grounded || decision?.state === DECISION_STATES.REJECT,
  };
}

export function outcomeAttributionEngine({ decision, observation, reality } = {}) {
  if (!observation?.observed) return { attributable: false, attribution: 'UNKNOWN' };
  if (!reality?.grounded) return { attributable: false, attribution: 'UNVERIFIED' };
  return {
    attributable: true,
    attribution: decision?.state === DECISION_STATES.PASS ? 'ACTION_LINKED' : 'NO_ACTION_LINK',
  };
}

export function confidenceCalibrationEngine({ confidence = 50, attributable = false } = {}) {
  const before = Math.max(0, Math.min(100, Number(confidence)));
  const adjustment = attributable ? 2 : -2;
  const after = Math.max(0, Math.min(100, before + adjustment));
  return { before, after, adjustment };
}

export function learningQualityController({ evidence, reality, attribution } = {}) {
  const learnable = Boolean(evidence?.strength > 0 && reality?.grounded && attribution?.attributable);
  return { learnable, status: learnable ? 'LEARN' : 'HOLD_LEARNING' };
}

export function predictionOutcomeMemory({ mission, decision, observation, calibration } = {}) {
  return {
    mission: mission?.mission ?? '',
    prediction: decision?.state ?? DECISION_STATES.HOLD,
    confidenceBefore: calibration?.before ?? decision?.confidence ?? 50,
    actualOutcome: observation?.outcome ?? '',
    timestamp: new Date().toISOString(),
  };
}

export function runGKFXL(input = {}) {
  const mission = missionEngine(input);
  const context = contextEngine(input);
  const evidence = evidenceEngine(input);
  const action = actionEngine(input);
  const observation = observationEngine(input);
  const decision = decisionEngine({ mission, evidence, action: action.proposed, outcome: observation.outcome, confidence: input.confidence });
  const reality = realityGroundingGate({ evidence, observation, decision });
  const attribution = outcomeAttributionEngine({ decision, observation, reality });
  const calibration = confidenceCalibrationEngine({ confidence: decision.confidence, attributable: attribution.attributable });
  const learning = learningQualityController({ evidence, reality, attribution });
  const memory = predictionOutcomeMemory({ mission, decision, observation, calibration });

  return {
    version: '6.4',
    loop: [
      'MISSION', 'CONTEXT', 'EVIDENCE', 'DECISION', 'ACTION', 'OBSERVATION',
      'REALITY_GROUNDING', 'OUTCOME_ATTRIBUTION', 'CONFIDENCE_CALIBRATION',
      'LEARNING_QUALITY', 'PREDICTION_OUTCOME_MEMORY',
    ],
    mission,
    context,
    evidence,
    decision,
    action,
    observation,
    reality,
    attribution,
    calibration,
    learning,
    memory,
  };
}
