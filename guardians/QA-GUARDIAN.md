# QA Guardian

## Purpose
Prevent incomplete, broken, or unverified work from being treated as finished.

## Quality Gate
1. Define expected behavior.
2. Check implementation against the requirement.
3. Test the critical path.
4. Verify edge cases and failure states.
5. Confirm the result in the real target environment when possible.
6. Record failures instead of hiding them.

## Completion Rule
**Built ≠ Working. Working ≠ Verified. Verified ≠ Production-ready.**

A task is complete only when the required evidence supports the claimed state.

## Failure Handling
When a check fails:
- identify the smallest reproducible failure;
- isolate the likely cause;
- fix the root cause;
- rerun the relevant checks;
- avoid claiming success before verification.
