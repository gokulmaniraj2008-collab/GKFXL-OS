# AGI Computer-Use Robot — V1 Roadmap

## Mission
Build a physical AGI-oriented computer-use system that can operate a laptop/PC through observation, planning, controlled actions, verification, recovery, and learning.

## V1 Goal
The first milestone is a reliable computer-use agent, not a humanoid robot and not a claim of full AGI.

## V1 Architecture

```text
GKFXL OS
  -> Mission / Intent
  -> Context + State
  -> Planner
  -> Computer-Use Agent
      -> Screen Capture
      -> UI/OCR Understanding
      -> Mouse / Keyboard
      -> Browser / Terminal / Files
  -> Verification
  -> Reality Feedback
  -> Memory / Outcome Ledger
```

## Milestones

### M1 — Observe
- Capture the desktop.
- Detect application, window, text, buttons, and relevant UI state.
- Maintain a compact current-screen state.

### M2 — Act
- Mouse movement and clicks.
- Keyboard input and hotkeys.
- Browser navigation.
- Safe terminal commands.

### M3 — Verify
Every meaningful action must have an expected result and an observation step.

```text
Action -> Observation -> Expected-vs-Actual -> PASS/HOLD/REJECT/ESCALATE
```

### M4 — Recover
When an action fails:
1. Stop the current action chain.
2. Capture the new state.
3. Diagnose the failure.
4. Choose a bounded recovery action.
5. Re-verify.
6. Escalate when confidence or risk is insufficient.

### M5 — Remember
Store:
- Mission
- Plan
- Actions
- Observations
- Prediction
- Confidence
- Outcome
- Failure
- Recovery
- Lesson

## Safety Boundaries

Automatic actions should be limited to low-risk operations. Medium-risk actions require confirmation according to policy. High-risk or destructive operations require explicit human approval.

The agent must never treat an unverified action as completed merely because the command was issued.

## Physical V1

Recommended prototype:
- Mini PC or laptop-class computer for AGI compute
- ESP32-S3 for physical control
- USB camera for physical environment awareness
- Microphone and speaker
- Status LEDs/display
- Physical emergency-stop
- Optional servos for future interaction

Direct screen capture should be the primary source for computer-state understanding; the physical camera is supplementary.

## V1 Definition of Done

A task is considered successful only when the agent can:

1. Receive a goal.
2. Understand the current computer state.
3. Produce a bounded plan.
4. Execute computer actions.
5. Observe the result.
6. Verify the intended outcome.
7. Recover from common failures.
8. Record the outcome and uncertainty.
9. Ask for human approval when required.

## GKFXL Integration

This roadmap extends GKFXL OS v6.4's closed-loop model:

**Mission -> Context -> Decision -> Action -> Observation -> Reality Grounding -> Feedback -> Attribution -> Calibration -> Memory -> Benchmark -> Next Decision**

The computer-use layer is therefore a concrete actuator/observation system for GKFXL OS rather than a separate AI framework.
