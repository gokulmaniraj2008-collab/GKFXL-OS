# Context Engine

The Context Engine builds the smallest sufficient model of the current situation before a decision is made.

## Context Layers

- User intent
- Current project state
- Available evidence
- Constraints
- Dependencies
- Risks
- Prior decisions
- Relevant history
- Unknowns

## Context Quality Check

Before acting, classify information as:

- **Known** — directly supported by evidence
- **Inferred** — reasonable interpretation
- **Unknown** — requires verification
- **Stale** — previously true but not confirmed now

## Rule

Do not fill critical unknowns with confident guesses. Mark uncertainty and verify when it can materially change the decision.
