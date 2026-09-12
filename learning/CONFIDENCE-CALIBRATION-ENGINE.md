# Confidence Calibration Engine

## Purpose
Make confidence reflect evidence quality and historical accuracy rather than subjective certainty.

## Confidence Inputs
- Evidence strength
- Source reliability
- Evidence freshness
- Agreement between independent signals
- Verification status
- Historical prediction accuracy
- Consequence of being wrong

## Rules
- Confidence must never substitute for evidence.
- High confidence with weak evidence is a calibration warning.
- Confidence should decrease after failed predictions and increase only when outcomes support the prediction.
- Uncertainty must remain explicit when evidence is incomplete.

## Calibration Loop
Prediction → Confidence → Outcome → Error measurement → Calibration update → Future prediction.

## Principle
**Confidence is a measurable estimate of reliability, not a feeling of certainty.**
