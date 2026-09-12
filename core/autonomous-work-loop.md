# Autonomous Work Loop

The Autonomous Work Loop turns a mission into bounded execution with continuous verification.

## Loop

```text
Mission
  ↓
Understand
  ↓
Plan
  ↓
Act
  ↓
Test
  ↓
Verify
  ↓
Observe outcome
  ↓
Learn
  ↓
Decide next action
```

## Safety Boundaries

- Never invent completion.
- Never expose or commit secrets.
- Stop when required evidence is unavailable.
- Escalate destructive or irreversible actions when authorization is unclear.
- Keep changes bounded and reversible where possible.

## Exit Conditions

The loop ends when:

1. The mission is verified successful.
2. The mission is verified failed and recovery is complete.
3. A blocker requires human input.
4. Further work has insufficient expected value.
