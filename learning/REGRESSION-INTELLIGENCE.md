# Regression Intelligence

## Purpose
Detect when an upgrade, code change, new assumption, or strategy improvement makes an existing capability worse.

## Regression Signals
- Previously passing benchmark now fails
- Reliability decreases
- Error rate increases
- Security guarantee weakens
- Latency or cost becomes unacceptable
- User outcome deteriorates
- Previously verified behavior changes unexpectedly

## Regression Loop
Baseline → Change → Re-test → Compare → Classify → Block, accept, or rollback → Record.

## Change Classification
- Improvement
- Neutral
- Regression
- Mixed trade-off
- Inconclusive

## Guard Rule
A new capability must not silently destroy a critical existing capability. Critical regressions require recovery, rollback, or explicit acceptance of the trade-off.

## Principle
**An upgrade is only an upgrade if the whole system is better, not merely the changed part.**
