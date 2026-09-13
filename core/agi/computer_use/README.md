# GKFXL Computer Use

Initial V1 package boundary for the AGI computer-use layer.

## Control loop

`observe -> plan -> act -> verify -> recover -> remember`

The first implementation should remain sandboxed and require approval for risky actions.

## Planned modules

- `vision/` — screen and UI state extraction
- `control/` — mouse and keyboard adapters
- `browser/` — browser interaction
- `terminal/` — bounded terminal execution
- `planner/` — task planning
- `verification/` — expected-vs-actual checks
- `recovery/` — bounded failure recovery
- `memory/` — task and outcome records
