# Drift Detection

## Purpose
Detect when the world, data, user behavior, assumptions, or system environment changes enough to make previously reliable decisions less reliable.

## Drift Types
- Data drift
- Behavior drift
- Environment drift
- Requirement drift
- Performance drift
- Outcome drift
- Assumption drift

## Detection Loop
Baseline → Monitor → Compare → Detect change → Assess significance → Recalibrate → Re-test → Record.

## Rules
- Do not treat every change as meaningful drift.
- Use historical baselines and relevant thresholds.
- Check whether drift affects mission outcomes.
- Trigger re-validation when previously reliable assumptions become questionable.

## Principle
**A system that learns must also notice when its world changes.**
