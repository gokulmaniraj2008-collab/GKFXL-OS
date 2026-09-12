# Reality Check Engine

The Reality Check Engine prevents the system from treating assumptions, plans, or generated output as reality.

## Checks

- Is this claim supported by evidence?
- Is the evidence current?
- Can the result be independently verified?
- What could falsify the conclusion?
- What changed in the real environment?
- Is the reported success only internal, or externally observable?

## Reality Gate

A result can be marked **verified** only when the defined verification condition passes.

Otherwise use:

- `unverified`
- `partially_verified`
- `blocked`
- `failed`

## Rule

When evidence conflicts with expectation, reality wins. Update the model instead of forcing the evidence to fit the prior belief.
